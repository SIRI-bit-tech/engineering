"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  status: string;
  startDate: string | null;
  completionDate: string | null;
  coverImage: string;
  published: boolean;
  category: {
    name: string;
    slug: string;
  };
  createdAt: string;
}

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "ongoing" | "completed">("all");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Project deleted successfully");
        fetchProjects();
      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentStatus }),
      });

      if (res.ok) {
        toast.success(`Project ${!currentStatus ? "published" : "unpublished"}`);
        fetchProjects();
      } else {
        toast.error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter =
      filter === "all" ||
      (filter === "published" && project.published) ||
      (filter === "draft" && !project.published);

    const matchesStatus =
      statusFilter === "all" ||
      project.status === statusFilter;

    return matchesSearch && matchesFilter && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary mb-2">
            Projects
          </h2>
          <p className="text-charcoal/60 font-body">
            Manage your engineering projects
          </p>
        </div>
        <Link href="/admin/dashboard/projects/new">
          <Button className="bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider">
            <Plus size={20} className="mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-default">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" size={20} />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-2">
              <span className="text-xs font-accent font-bold uppercase tracking-wider text-charcoal/60 flex items-center">
                Publish:
              </span>
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filter === "published" ? "default" : "outline"}
                onClick={() => setFilter("published")}
                size="sm"
              >
                Published
              </Button>
              <Button
                variant={filter === "draft" ? "default" : "outline"}
                onClick={() => setFilter("draft")}
                size="sm"
              >
                Drafts
              </Button>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-accent font-bold uppercase tracking-wider text-charcoal/60 flex items-center">
                Status:
              </span>
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={statusFilter === "ongoing" ? "default" : "outline"}
                onClick={() => setStatusFilter("ongoing")}
                size="sm"
              >
                Ongoing
              </Button>
              <Button
                variant={statusFilter === "completed" ? "default" : "outline"}
                onClick={() => setStatusFilter("completed")}
                size="sm"
              >
                Completed
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 shadow-default text-center">
          <p className="text-charcoal/60 font-body text-lg">
            {searchTerm || filter !== "all"
              ? "No projects found matching your criteria"
              : "No projects yet. Create your first project!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-default hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-48 bg-charcoal/5">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleTogglePublish(project.id, project.published)}
                    className={`px-3 py-1 rounded-lg text-xs font-accent font-bold uppercase tracking-wider ${
                      project.published
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.published ? (
                      <span className="flex items-center gap-1">
                        <Eye size={14} /> Published
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <EyeOff size={14} /> Draft
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-accent font-bold uppercase tracking-wider text-ocean">
                    {project.category.name}
                  </span>
                  <span className={`px-2 py-1 rounded-lg text-xs font-accent font-bold uppercase tracking-wider ${
                    project.status === "completed" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-charcoal/60 font-body mb-2">
                  {project.location}
                </p>
                {project.completionDate && (
                  <p className="text-xs text-charcoal/40 font-mono mb-4">
                    Completed: {new Date(project.completionDate).toLocaleDateString()}
                  </p>
                )}
                {project.status === "ongoing" && project.startDate && (
                  <p className="text-xs text-charcoal/40 font-mono mb-4">
                    Started: {new Date(project.startDate).toLocaleDateString()}
                  </p>
                )}
                <div className="flex gap-2">
                  <Link href={`/admin/dashboard/projects/${project.id}/edit`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit size={16} className="mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(project.id, project.title)}
                    className="text-red-500 hover:text-red-600 hover:border-red-500"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
