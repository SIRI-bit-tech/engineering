"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useUploadThing } from "@/lib/uploadthing";
import { 
  X, 
  UploadCloud, 
  Check, 
  Plus, 
  Award as AwardIcon, 
  Trophy, 
  Medal, 
  ShieldCheck, 
  Zap, 
  Crown, 
  Sparkles,
  Trash2
} from "lucide-react";
import Image from "next/image";
import { AwardBadge } from "@/components/ui/AwardBadge";

interface ProjectOption {
  id: string;
  title: string;
  status: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeType?: string;
  code?: string;
  imageUrl?: string;
}

interface UserFormData {
  name: string;
  username: string;
  email: string;
  bio: string;
  dob: string;
  profilePicture: string;
  jobTitle: string;
  startDate: string;
  pastWorks: string;
  yearsOfExperience: string;
  school: string;
  origin: string;
  livesIn: string;
  phoneNumber: string;
  awards: AwardItem[];
  projectIds: string[];
}

interface UserFormProps {
  userId?: string;
  initialData?: Partial<UserFormData>;
}

const PRESET_AWARDS: AwardItem[] = [
  {
    id: "preset-ieee",
    title: "IEEE Senior Member & Fellow Grade",
    issuer: "Institute of Electrical and Electronics Engineers (IEEE)",
    year: "2023",
    code: "IEEE",
    badgeType: "ieee",
  },
  {
    id: "preset-pe",
    title: "Registered Professional Engineer (PE)",
    issuer: "National Council of Examiners for Engineering (NCEES)",
    year: "2021",
    code: "PE",
    badgeType: "pe",
  },
  {
    id: "preset-energy-globe",
    title: "Energy Globe Sustainability Award",
    issuer: "Energy Globe Foundation (World Sustainability Award)",
    year: "2022",
    code: "ENERGY_GLOBE",
    badgeType: "energy_globe",
  },
  {
    id: "preset-sp-global",
    title: "S&P Global Energy Excellence Award",
    issuer: "S&P Global Commodity Insights",
    year: "2024",
    code: "SP_GLOBAL",
    badgeType: "sp_global",
  },
  {
    id: "preset-nfpa",
    title: "NFPA 70E Certified Electrical Safety Worker",
    issuer: "National Fire Protection Association (NFPA)",
    year: "2024",
    code: "NFPA",
    badgeType: "nfpa",
  },
  {
    id: "preset-asme",
    title: "ASME Westinghouse Power Engineering Medal",
    issuer: "American Society of Mechanical Engineers (ASME)",
    year: "2022",
    code: "ASME",
    badgeType: "asme",
  },
  {
    id: "preset-pmp",
    title: "Project Management Professional (PMP®)",
    issuer: "Project Management Institute (PMI)",
    year: "2020",
    code: "PMP",
    badgeType: "pmp",
  },
];

export const DEFAULT_BIO_TEMPLATE = `[Name] is a licensed Professional Engineer (PE) with [XX]+ years of experience in power maintenance engineering, specializing in MEP systems, high-voltage transmission, and power circulation and distribution networks. Over the course of his career, he has developed deep expertise in diagnosing and resolving complex electrical infrastructure challenges, with particular strength in transmission reliability, load distribution efficiency, and system-wide power circulation planning.

Now working on a selective, project basis, [Name] collaborates and partners with clients and companies mainly in the United States and other global regions, including East Asia, North Asia, South Asia, Oceania, and Europe, supporting utility-scale and industrial power distribution projects. His approach blends rigorous technical analysis with decades of field-tested judgment, allowing him to identify system vulnerabilities and design solutions that improve both performance and long-term reliability.

[Name]’s engineering philosophy centers on precision, durability, and practical problem-solving — building power systems that not only meet code but perform reliably under real-world demand over the long term. He is known among colleagues and clients for his methodical approach to troubleshooting large-scale distribution issues and his ability to translate complex technical findings into clear, actionable recommendations for project stakeholders.

Having spent his early years near Amsterdam before building his career in the U.S., [Name] brings an international perspective to engineering standards and practices, drawing on exposure to different regulatory and infrastructure environments throughout his professional life.`;

export const DEFAULT_ACHIEVEMENTS_TEMPLATE = `Transmission & Distribution System Upgrades
Led engineering assessments and modernization efforts on multiple medium- and high-voltage transmission networks, improving system reliability and reducing downtime across service areas.

Cross-Border Project Delivery
Managed and consulted on power infrastructure projects spanning both U.S. and Mexican markets, navigating differing regulatory frameworks while maintaining consistent engineering standards.

Arizona Power Distribution Initiatives
Provided engineering oversight on distribution network projects across Arizona, focusing on load balancing, capacity planning, and system resilience in high-demand environments.

Professional Engineer (PE) Licensure
Maintains active PE licensure, reflecting sustained commitment to engineering rigor, safety standards, and professional accountability throughout his career.

Independent Consulting Practice
Transitioned to a semi-retired, project-based consulting model, allowing him to focus expertise on select engagements where his experience delivers the greatest technical and operational value to clients.`;

export function UserForm({ userId, initialData }: UserFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectOption[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Custom award input state
  const [customTitle, setCustomTitle] = useState("");
  const [customIssuer, setCustomIssuer] = useState("");
  const [customYear, setCustomYear] = useState(new Date().getFullYear().toString());
  const [customImageUrl, setCustomImageUrl] = useState("");

  const { startUpload: startAvatarUpload, isUploading: isAvatarUploading } = useUploadThing("profilePicture", {
    onClientUploadComplete: (res) => {
      if (res?.[0]) {
        const fileUrl = res[0].ufsUrl || res[0].url;
        setFormData((prev) => ({ ...prev, profilePicture: fileUrl }));
        toast.success("Profile picture uploaded successfully");
      }
    },
    onUploadError: (error: Error) => {
      toast.error(`Upload failed: ${error.message}`);
    },
  });

  const [formData, setFormData] = useState<UserFormData>({
    name: initialData?.name || "",
    username: initialData?.username || "",
    email: initialData?.email || "",
    bio: initialData?.bio || DEFAULT_BIO_TEMPLATE,
    dob: initialData?.dob ? new Date(initialData.dob).toISOString().split('T')[0] : "",
    profilePicture: initialData?.profilePicture || "",
    jobTitle: initialData?.jobTitle || "",
    startDate: initialData?.startDate 
      ? (isNaN(Date.parse(initialData.startDate)) ? initialData.startDate : new Date(initialData.startDate).getUTCFullYear().toString()) 
      : "",
    pastWorks: initialData?.pastWorks || DEFAULT_ACHIEVEMENTS_TEMPLATE,
    yearsOfExperience: initialData?.yearsOfExperience?.toString() || "25",
    school: initialData?.school || "",
    origin: initialData?.origin || "",
    livesIn: initialData?.livesIn || "",
    phoneNumber: initialData?.phoneNumber || "",
    awards: (initialData?.awards as AwardItem[]) || [],
    projectIds: initialData?.projectIds || [],
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const dropdownRes = await fetch("/api/admin/projects/dropdown");
      if (dropdownRes.ok) {
        const data = await dropdownRes.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to load project list");
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      startAvatarUpload([files[0]]);
    }
  };

  const toggleProject = (projectId: string) => {
    setFormData((prev) => {
      const isSelected = prev.projectIds.includes(projectId);
      const newProjectIds = isSelected
        ? prev.projectIds.filter((id) => id !== projectId)
        : [...prev.projectIds, projectId];
      return { ...prev, projectIds: newProjectIds };
    });
  };

  const addPresetAward = (preset: AwardItem) => {
    // Check if already added
    if (formData.awards.some((a) => a.title === preset.title)) {
      toast.info(`"${preset.title}" is already added.`);
      return;
    }
    const newAward: AwardItem = {
      id: `award-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: preset.title,
      issuer: preset.issuer,
      year: preset.year,
      badgeType: preset.badgeType,
      imageUrl: preset.imageUrl,
    };
    setFormData((prev) => ({
      ...prev,
      awards: [...prev.awards, newAward],
    }));
    toast.success(`Added "${preset.title}" to staff profile.`);
  };

  const addCustomAward = () => {
    if (!customTitle) {
      toast.error("Please enter an award title");
      return;
    }
    const newAward: AwardItem = {
      id: `award-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: customTitle,
      issuer: customIssuer || "VoltaEdge Accreditation",
      year: customYear || new Date().getFullYear().toString(),
      imageUrl: customImageUrl || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&auto=format&fit=crop&q=80",
    };
    setFormData((prev) => ({
      ...prev,
      awards: [...prev.awards, newAward],
    }));
    setCustomTitle("");
    setCustomIssuer("");
    setCustomImageUrl("");
    toast.success("Custom award added.");
  };

  const removeAward = (awardId: string) => {
    setFormData((prev) => ({
      ...prev,
      awards: prev.awards.filter((a) => a.id !== awardId),
    }));
  };

  const updateAwardYear = (awardId: string, newYear: string) => {
    setFormData((prev) => ({
      ...prev,
      awards: prev.awards.map((a) =>
        a.id === awardId ? { ...a, year: newYear } : a
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.username) {
      toast.error("Please fill in Name and Username");
      setLoading(false);
      return;
    }

    try {
      const url = userId
        ? `/api/admin/users/${userId}`
        : "/api/admin/users";
      const method = userId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          yearsOfExperience: formData.yearsOfExperience ? parseInt(formData.yearsOfExperience) : null,
          dob: formData.dob || null,
          startDate: formData.startDate || null,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        toast.success(
          userId ? "Staff profile updated successfully" : "Staff profile created successfully"
        );

        if (!userId) {
          toast.info(`Login credentials - Username: ${result.username} | User ID: ${result.id}`, {
            duration: 12000,
          });
        }

        router.push("/admin/dashboard/users");
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to save staff details");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error("Failed to save staff details");
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {/* Profile Photo Block */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <h3 className="text-lg font-display font-bold text-primary mb-6">
          Profile Photo
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border border-charcoal/10 bg-ice-blue/20">
            {formData.profilePicture ? (
              <img
                src={formData.profilePicture}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-charcoal/40 font-display text-4xl">
                {formData.name ? formData.name.charAt(0).toUpperCase() : "?"}
              </div>
            )}
            {formData.profilePicture && (
              <button
                type="button"
                onClick={() => setFormData({ ...formData, profilePicture: "" })}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                disabled={isAvatarUploading}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-ocean text-ocean hover:bg-ocean/10 transition-colors rounded-xl font-accent font-bold text-xs uppercase tracking-wider disabled:opacity-50"
              >
                {isAvatarUploading ? (
                  "Uploading Avatar..."
                ) : (
                  <>
                    <UploadCloud size={16} className="mr-2" />
                    Upload Avatar Image
                  </>
                )}
              </label>
            </div>
            <div className="mt-3">
              <Input
                placeholder="Or paste direct image URL (https://...)"
                value={formData.profilePicture.startsWith("data:") ? "" : formData.profilePicture}
                onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
                className="text-xs"
              />
            </div>
            <p className="text-[10px] text-charcoal/50 mt-1">
              Select an image file to upload or paste a direct image web link.
            </p>
          </div>
        </div>
      </div>

      {/* Account Info Block */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <h3 className="text-lg font-display font-bold text-primary mb-6">
          Account Credentials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="username">Username *</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().trim() })}
              placeholder="johndoe"
              required
            />
            <p className="text-[10px] text-charcoal/50 mt-1">
              Used for logging in. Alphanumeric, lowercase only.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Info & Background */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <h3 className="text-lg font-display font-bold text-primary mb-6">
          Professional Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="jobTitle">Job Title / Work Role</Label>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="e.g. Semiretired Power Maintenance"
            />
          </div>

          <div>
            <Label htmlFor="yearsOfExperience">Years of Experience</Label>
            <Input
              id="yearsOfExperience"
              type="number"
              min="0"
              value={formData.yearsOfExperience}
              onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
              placeholder="e.g. 15"
            />
          </div>

          <div>
            <Label htmlFor="startDate">Start Year (VoltaEdge)</Label>
            <Input
              id="startDate"
              type="text"
              placeholder="e.g. 2004"
              maxLength={4}
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="school">School / Degree</Label>
            <Input
              id="school"
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              placeholder="e.g. B.Sc. Electrical Engineering, MIT"
            />
          </div>

          <div>
            <Label htmlFor="origin">Place of Origin (Where he's from)</Label>
            <Input
              id="origin"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              placeholder="e.g. Austin, Texas"
            />
          </div>

          <div>
            <Label htmlFor="livesIn">Current Location (Where he lives)</Label>
            <Input
              id="livesIn"
              value={formData.livesIn}
              onChange={(e) => setFormData({ ...formData, livesIn: e.target.value })}
              placeholder="e.g. Houston, Texas"
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="e.g. +1 (555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. john.doe@voltaedge.com"
            />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Awards & Accreditations Block */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-display font-bold text-primary">
              Awards & Accreditations
            </h3>
            <p className="text-xs text-charcoal/60 mt-0.5">
              Click any preset award badge below to instantly assign it to this staff member, or create a custom award.
            </p>
          </div>
        </div>

        {/* Preset Badges Grid */}
        <div className="mb-6">
          <Label className="text-xs font-accent font-bold uppercase tracking-wider text-charcoal/70 mb-3 block">
            Clickable Preset Award Badges
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {PRESET_AWARDS.map((preset) => {
              const isAdded = formData.awards.some((a) => a.title === preset.title);
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => addPresetAward(preset)}
                  className={`flex items-center space-x-3 p-3 rounded-xl border text-left transition-all ${
                    isAdded
                      ? "bg-ocean/10 border-ocean text-ocean shadow-sm"
                      : "bg-ice-blue/10 border-charcoal/10 hover:border-ocean hover:bg-ice-blue/30 text-charcoal"
                  }`}
                >
                  <AwardBadge
                    code={preset.code}
                    badgeType={preset.badgeType}
                    imageUrl={preset.imageUrl}
                    title={preset.title}
                    size="sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-body font-bold truncate">
                      {preset.title}
                    </p>
                    <p className="text-[10px] text-charcoal/60 truncate">
                      {preset.issuer} • {preset.year}
                    </p>
                  </div>
                  {isAdded && <Check size={16} className="text-ocean flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Award Inputs */}
        <div className="border-t border-charcoal/10 pt-6 mb-6">
          <Label className="text-xs font-accent font-bold uppercase tracking-wider text-charcoal/70 mb-3 block">
            Add Custom Award
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <Input
              placeholder="Award Title (e.g. PE Honor Medal)"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
            />
            <Input
              placeholder="Issuing Body / Organization"
              value={customIssuer}
              onChange={(e) => setCustomIssuer(e.target.value)}
            />
            <Input
              placeholder="Year (e.g. 2024)"
              value={customYear}
              onChange={(e) => setCustomYear(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="Badge Image URL (Optional)"
              value={customImageUrl}
              onChange={(e) => setCustomImageUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              onClick={addCustomAward}
              className="border-ocean text-ocean hover:bg-ocean/10 font-accent text-xs uppercase"
            >
              <Plus size={16} className="mr-1.5" />
              Add Award
            </Button>
          </div>
        </div>

        {/* List of Added Awards */}
        <div>
          <Label className="text-xs font-accent font-bold uppercase tracking-wider text-charcoal/70 mb-3 block">
            Assigned Awards ({formData.awards.length})
          </Label>
          {formData.awards.length > 0 ? (
            <div className="space-y-2">
              {formData.awards.map((award) => (
                <div
                  key={award.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-ice-blue/20 rounded-xl border border-charcoal/10 gap-3"
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <AwardBadge
                      code={award.code}
                      badgeType={award.badgeType}
                      imageUrl={award.imageUrl}
                      title={award.title}
                      size="sm"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-body font-bold text-primary truncate">
                        {award.title}
                      </p>
                      <p className="text-[10px] text-charcoal/60 truncate">
                        {award.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 self-end sm:self-auto">
                    <div className="flex items-center space-x-1.5">
                      <Label htmlFor={`award-year-${award.id}`} className="text-[10px] font-accent uppercase text-charcoal/60 whitespace-nowrap">
                        Award Date/Year:
                      </Label>
                      <Input
                        id={`award-year-${award.id}`}
                        type="text"
                        value={award.year}
                        onChange={(e) => updateAwardYear(award.id, e.target.value)}
                        placeholder="e.g. 2024"
                        className="w-28 h-8 text-xs font-mono bg-white border-charcoal/20 focus:border-ocean text-primary"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAward(award.id)}
                      className="text-red-500 hover:text-red-600 p-1.5 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Remove Award"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-charcoal/50 italic bg-ice-blue/10 p-4 rounded-xl text-center">
              No awards added yet. Click a preset badge above to add one.
            </p>
          )}
        </div>
      </div>

      {/* Biography & Achievements */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <h3 className="text-lg font-display font-bold text-primary mb-6">
          Biographical & Past Works
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label htmlFor="bio">Professional Biography</Label>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, bio: DEFAULT_BIO_TEMPLATE }))}
                className="text-[10px] font-accent font-bold uppercase text-ocean hover:underline"
              >
                Insert Standard Bio Template
              </button>
            </div>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Write a brief professional summary about the staff member..."
              rows={8}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label htmlFor="pastWorks">Achievements & Past Projects</Label>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, pastWorks: DEFAULT_ACHIEVEMENTS_TEMPLATE }))}
                className="text-[10px] font-accent font-bold uppercase text-ocean hover:underline"
              >
                Insert Standard Achievements Template
              </button>
            </div>
            <Textarea
              id="pastWorks"
              value={formData.pastWorks}
              onChange={(e) => setFormData({ ...formData, pastWorks: e.target.value })}
              placeholder="List notable past projects, roles, or career milestones..."
              rows={8}
            />
          </div>
        </div>
      </div>

      {/* Project Assignments */}
      <div className="bg-white rounded-2xl p-8 shadow-default border border-charcoal/5">
        <h3 className="text-lg font-display font-bold text-primary mb-2">
          Project Assignments (All Site Projects)
        </h3>
        <p className="text-xs text-charcoal/60 mb-6">
          Assign this user to projects (includes both site portfolio projects and admin-created projects). They will be categorized as "Ongoing" or "Done" on their profile based on the project's status.
        </p>

        <div className="space-y-4">
          <Input
            placeholder="Search projects by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />

          <div className="border border-charcoal/10 rounded-xl max-h-64 overflow-y-auto divide-y divide-charcoal/5">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const isSelected = formData.projectIds.includes(project.id);
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-ice-blue/20 transition-colors text-left"
                  >
                    <div>
                      <p className="text-sm font-body text-primary font-bold">
                        {project.title}
                      </p>
                      <p className="text-[10px] text-charcoal/50 uppercase tracking-wider">
                        Status: {project.status}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-ocean border-ocean text-white"
                          : "border-charcoal/20"
                      }`}
                    >
                      {isSelected && <Check size={14} />}
                    </div>
                  </button>
                );
              })
            ) : (
              <p className="text-sm text-charcoal/50 p-4 text-center">
                Loading projects list...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider px-8 py-3 rounded-xl shadow-button transition-transform hover:-translate-y-0.5"
        >
          {loading ? "Saving..." : userId ? "Update User" : "Create User"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={loading}
          className="px-8 py-3 rounded-xl border-charcoal/20 hover:bg-charcoal/5"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
