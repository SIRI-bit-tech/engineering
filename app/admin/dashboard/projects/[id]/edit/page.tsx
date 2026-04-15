"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { toast } from "sonner";

export default function EditProjectPage() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/admin/projects/${params.id}`);
      if (res.ok) {
        const data = await res.json();
        setProject(data);
      } else {
        toast.error("Project not found");
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      toast.error("Failed to fetch project");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-white rounded-2xl p-12 shadow-default text-center">
        <p className="text-charcoal/60 font-body text-lg">Project not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Edit Project
        </h2>
        <p className="text-charcoal/60 font-body">
          Update project information and content
        </p>
      </div>

      <ProjectForm projectId={params.id as string} initialData={project} />
    </div>
  );
}
