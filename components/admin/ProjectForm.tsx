"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useUploadThing } from "@/lib/uploadthing";
import { X, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ProjectFormData {
  title: string;
  slug: string;
  categoryId: string;
  location: string;
  status: string;
  startDate: string;
  completionDate: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  coverImage: string;
  additionalImages: string[];
  stats: { label: string; value: string }[];
  technicalAnalysis: string[];
  implementationTimeline: string[];
  keyTechnologies: string[];
  environmentalImpact: string[];
  published: boolean;
}

interface ProjectFormProps {
  projectId?: string;
  initialData?: Partial<ProjectFormData>;
}

export function ProjectForm({ projectId, initialData }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategorySlug, setNewCategorySlug] = useState("");

  const { startUpload: startCoverUpload, isUploading: isCoverUploading } = useUploadThing("projectImage", {
    onClientUploadComplete: (res) => {
      if (res?.[0]?.ufsUrl) {
        setFormData({ ...formData, coverImage: res[0].ufsUrl });
        toast.success("Cover image uploaded");
      }
    },
    onUploadError: (error: Error) => {
      toast.error(`Upload failed: ${error.message}`);
    },
  });

  const { startUpload: startGalleryUpload, isUploading: isGalleryUploading } = useUploadThing("projectGallery", {
    onClientUploadComplete: (res) => {
      if (res) {
        const newImages = res.map((file) => file.ufsUrl);
        setFormData({
          ...formData,
          additionalImages: [...formData.additionalImages, ...newImages],
        });
        toast.success(`${res.length} image(s) uploaded`);
      }
    },
    onUploadError: (error: Error) => {
      toast.error(`Upload failed: ${error.message}`);
    },
  });

  const [formData, setFormData] = useState<ProjectFormData>({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    categoryId: initialData?.categoryId || "",
    location: initialData?.location || "",
    status: initialData?.status || "ongoing",
    startDate: initialData?.startDate ? new Date(initialData.startDate).toISOString().split('T')[0] : "",
    completionDate: initialData?.completionDate ? new Date(initialData.completionDate).toISOString().split('T')[0] : "",
    description: initialData?.description || "",
    challenge: initialData?.challenge || "",
    solution: initialData?.solution || "",
    results: initialData?.results || [""],
    coverImage: initialData?.coverImage || "",
    additionalImages: initialData?.additionalImages || [],
    stats: initialData?.stats || [{ label: "", value: "" }],
    technicalAnalysis: initialData?.technicalAnalysis || [""],
    implementationTimeline: initialData?.implementationTimeline || [""],
    keyTechnologies: initialData?.keyTechnologies || [""],
    environmentalImpact: initialData?.environmentalImpact || [""],
    published: initialData?.published || false,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    // Auto-generate slug from title
    if (!projectId && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replaceAll(/[^a-z0-9]+/g, "-")
        .replaceAll(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title, projectId]);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName || !newCategorySlug) {
      toast.error("Please fill in all category fields");
      return;
    }

    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCategoryName,
          slug: newCategorySlug,
        }),
      });

      if (res.ok) {
        const newCategory = await res.json();
        toast.success("Category created successfully");
        setCategories([...categories, newCategory]);
        setFormData({ ...formData, categoryId: newCategory.id });
        setShowNewCategory(false);
        setNewCategoryName("");
        setNewCategorySlug("");
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to create category");
      }
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error("Failed to create category");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.title || !formData.slug || !formData.categoryId || !formData.coverImage) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const url = projectId
        ? `/api/admin/projects/${projectId}`
        : "/api/admin/projects";
      const method = projectId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          results: formData.results.filter((r) => r.trim() !== ""),
          stats: formData.stats.filter((s) => s.label && s.value),
          technicalAnalysis: formData.technicalAnalysis.filter((r) => r.trim() !== ""),
          implementationTimeline: formData.implementationTimeline.filter((r) => r.trim() !== ""),
          keyTechnologies: formData.keyTechnologies.filter((r) => r.trim() !== ""),
          environmentalImpact: formData.environmentalImpact.filter((r) => r.trim() !== ""),
        }),
      });

      if (res.ok) {
        toast.success(
          projectId ? "Project updated successfully" : "Project created successfully"
        );
        router.push("/admin/dashboard/projects");
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to save project");
      }
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  // Helper for generic array updates
  const addArrayItem = (field: keyof ProjectFormData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""],
    }));
  };

  const removeArrayItem = (field: keyof ProjectFormData, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (field: keyof ProjectFormData, index: number, value: string) => {
    const newArray = [...(formData[field] as string[])];
    newArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addStat = () => {
    setFormData({
      ...formData,
      stats: [...formData.stats, { label: "", value: "" }],
    });
  };

  const removeStat = (index: number) => {
    setFormData({
      ...formData,
      stats: formData.stats.filter((_, i) => i !== index),
    });
  };

  const updateStat = (index: number, field: "label" | "value", value: string) => {
    const newStats = [...formData.stats];
    newStats[index][field] = value;
    setFormData({ ...formData, stats: newStats });
  };

  const removeAdditionalImage = (index: number) => {
    setFormData({
      ...formData,
      additionalImages: formData.additionalImages.filter((_, i) => i !== index),
    });
  };

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      startCoverUpload([files[0]]);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      startGalleryUpload(Array.from(files));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Houston Industrial Microgrid Integration"
              required
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="houston-industrial-microgrid"
              required
            />
            <p className="text-xs text-charcoal/60 mt-1">
              URL-friendly version of the title
            </p>
          </div>

          <div>
            <Label htmlFor="category">Category *</Label>
            {!showNewCategory ? (
              <div className="flex gap-2">
                <select
                  id="category"
                  value={formData.categoryId}
                  onChange={(e) =>
                    setFormData({ ...formData, categoryId: e.target.value })
                  }
                  className="flex-1 h-9 rounded-lg border border-border bg-background px-3 text-sm"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowNewCategory(true)}
                >
                  <Plus size={16} />
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  placeholder="Category Name"
                  value={newCategoryName}
                  onChange={(e) => {
                    setNewCategoryName(e.target.value);
                    setNewCategorySlug(
                      e.target.value
                        .toLowerCase()
                        .replaceAll(/[^a-z0-9]+/g, "-")
                        .replaceAll(/(^-|-$)/g, "")
                    );
                  }}
                />
                <Input
                  placeholder="Category Slug"
                  value={newCategorySlug}
                  onChange={(e) => setNewCategorySlug(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleCreateCategory}
                    className="flex-1"
                  >
                    Create
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowNewCategory(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Houston, TX"
              required
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="status">Project Status *</Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="flex h-9 w-full rounded-lg border border-border bg-background px-3 text-sm"
              required
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <p className="text-xs text-charcoal/60 mt-1">
              Set whether this project is currently ongoing or completed
            </p>
          </div>

          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <p className="text-xs text-charcoal/60 mt-1">
              You can backdate or set any date for the project start
            </p>
          </div>

          <div>
            <Label htmlFor="completionDate">
              Completion Date {formData.status === "completed" && "*"}
            </Label>
            <Input
              id="completionDate"
              type="date"
              value={formData.completionDate}
              onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
              required={formData.status === "completed"}
              disabled={formData.status === "ongoing"}
            />
            <p className="text-xs text-charcoal/60 mt-1">
              {formData.status === "completed"
                ? "Required for completed projects. You can backdate or set any date."
                : "Only available for completed projects"}
            </p>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">
          Cover Image *
        </h3>
        {formData.coverImage ? (
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src={formData.coverImage}
              alt="Cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => setFormData({ ...formData, coverImage: "" })}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              disabled={isCoverUploading}
              className="hidden"
              id="cover-image-upload"
            />
            <label
              htmlFor="cover-image-upload"
              className="cursor-pointer inline-flex items-center px-4 py-2 bg-ocean text-white rounded-lg hover:bg-ocean/90 disabled:opacity-50"
            >
              {isCoverUploading ? "Uploading..." : "Choose Cover Image"}
            </label>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG, GIF up to 4MB
            </p>
          </div>
        )}
      </div>

      {/* Additional Images */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">
          Additional Images (Gallery)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {formData.additionalImages.map((img, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={img} alt={`Gallery ${index + 1}`} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" className="object-cover" />
              <button
                type="button"
                onClick={() => removeAdditionalImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryUpload}
            disabled={isGalleryUploading}
            className="hidden"
            id="gallery-upload"
          />
          <label
            htmlFor="gallery-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 bg-ocean text-white rounded-lg hover:bg-ocean/90 disabled:opacity-50"
          >
            {isGalleryUploading ? "Uploading..." : "Add Gallery Images"}
          </label>
          <p className="text-sm text-gray-500 mt-2">
            JPG, PNG, GIF up to 4MB each, max 10 files
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">
          Project Content
        </h3>
        <div className="space-y-6">
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Advanced electrical system design and grid integration..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="challenge">The Challenge</Label>
            <Textarea
              id="challenge"
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              placeholder="Describe the main challenge..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="solution">The Solution</Label>
            <Textarea
              id="solution"
              value={formData.solution}
              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              placeholder="Describe the solution implemented..."
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Case Study Detailed Sections */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">Case Study Details</h3>

        <div className="space-y-8">
          {/* Technical Analysis */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-bold">Technical Analysis / Engineering Specifications</Label>
              <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("technicalAnalysis")}>
                <Plus size={16} className="mr-2" /> Add Specification
              </Button>
            </div>
            <div className="space-y-3">
              {formData.technicalAnalysis.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => updateArrayItem("technicalAnalysis", index, e.target.value)}
                    placeholder="e.g., 345kV transmission line reinforcement..."
                  />
                  <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("technicalAnalysis", index)} className="text-red-500">
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Timeline */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-bold">Implementation Timeline / Phases</Label>
              <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("implementationTimeline")}>
                <Plus size={16} className="mr-2" /> Add Phase
              </Button>
            </div>
            <div className="space-y-3">
              {formData.implementationTimeline.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => updateArrayItem("implementationTimeline", index, e.target.value)}
                    placeholder="e.g., Phase 1: Transmission line audit..."
                  />
                  <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("implementationTimeline", index)} className="text-red-500">
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technologies */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-bold">Key Technologies / Technology Stack</Label>
              <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("keyTechnologies")}>
                <Plus size={16} className="mr-2" /> Add Technology
              </Button>
            </div>
            <div className="space-y-3">
              {formData.keyTechnologies.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => updateArrayItem("keyTechnologies", index, e.target.value)}
                    placeholder="e.g., Siemens SIPROTEC protection systems..."
                  />
                  <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("keyTechnologies", index)} className="text-red-500">
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Impact */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-bold">Environmental Impact / Sustainability</Label>
              <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("environmentalImpact")}>
                <Plus size={16} className="mr-2" /> Add Point
              </Button>
            </div>
            <div className="space-y-3">
              {formData.environmentalImpact.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => updateArrayItem("environmentalImpact", index, e.target.value)}
                    placeholder="e.g., Reduced CO2 emissions by 450,000 tons annually..."
                  />
                  <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("environmentalImpact", index)} className="text-red-500">
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display font-bold text-primary">Stats</h3>
          <Button type="button" variant="outline" size="sm" onClick={addStat}>
            <Plus size={16} className="mr-2" />
            Add Stat
          </Button>
        </div>
        <div className="space-y-3">
          {formData.stats.map((stat, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={stat.label}
                onChange={(e) => updateStat(index, "label", e.target.value)}
                placeholder="Label (e.g., Solar Capacity)"
                className="flex-1"
              />
              <Input
                value={stat.value}
                onChange={(e) => updateStat(index, "value", e.target.value)}
                placeholder="Value (e.g., 20MW)"
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeStat(index)}
                className="text-red-500"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Publish */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              Publish Status
            </h3>
            <p className="text-charcoal/60 font-body text-sm">
              Published projects will appear on the public website
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.published}
              onChange={(e) =>
                setFormData({ ...formData, published: e.target.checked })
              }
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-ocean"></div>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider"
        >
          {loading ? "Saving..." : projectId ? "Update Project" : "Create Project"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
