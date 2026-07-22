import { UserForm } from "@/components/admin/UserForm";

export default function NewUserPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Create Staff Profile
        </h2>
        <p className="text-charcoal/60 font-body">
          Add details, credentials, and project assignments for a new team member
        </p>
      </div>

      <UserForm />
    </div>
  );
}
