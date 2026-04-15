import { ProjectForm } from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Create New Project
        </h2>
        <p className="text-charcoal/60 font-body">
          Add a new engineering project to your portfolio
        </p>
      </div>

      <ProjectForm />
    </div>
  );
}
