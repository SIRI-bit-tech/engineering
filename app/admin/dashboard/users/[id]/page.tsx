"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { UserForm } from "@/components/admin/UserForm";
import { toast } from "sonner";

export default function EditUserPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchUserData();
    }
  }, [id]);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`/api/admin/users/${id}`);
      if (res.ok) {
        const data = await res.json();
        // Map backend dates and relations to form format
        const mappedData = {
          ...data,
          projectIds: data.assignedProjects?.map((p: any) => p.id) || [],
        };
        setUserData(mappedData);
      } else {
        toast.error("Failed to load staff details");
        router.push("/admin/dashboard/users");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      toast.error("Failed to load staff details");
      router.push("/admin/dashboard/users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Edit Staff Profile
        </h2>
        <p className="text-charcoal/60 font-body">
          Update personal details, credentials, or project assignments
        </p>
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-default border border-charcoal/5">
          <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-charcoal/60 font-body">Loading staff details...</p>
        </div>
      ) : (
        <UserForm userId={id} initialData={userData} />
      )}
    </div>
  );
}
