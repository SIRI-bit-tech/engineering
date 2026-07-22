"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Plus, Copy, Check, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface User {
  id: string;
  name: string | null;
  username: string | null;
  jobTitle: string | null;
  profilePicture: string | null;
  createdAt: string;
  assignedProjects: { id: string; title: string }[];
}

export default function UsersListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        toast.error("Failed to load staff users");
      }
    } catch (error) {
      console.error("Error loading users:", error);
      toast.error("An error occurred loading users");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("User ID copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user.id !== id));
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary mb-2">
            User Management
          </h2>
          <p className="text-charcoal/60 font-body">
            Manage staff accounts, assign projects, and view user credentials
          </p>
        </div>

        <Link href="/admin/dashboard/users/new">
          <Button className="bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider">
            <Plus size={16} className="mr-2" />
            Add User
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-default border border-charcoal/5">
          <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-charcoal/60 font-body">Loading staff users...</p>
        </div>
      ) : users.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-default border border-charcoal/5">
          <p className="text-charcoal/60 font-body mb-4">No staff users created yet.</p>
          <Link href="/admin/dashboard/users/new">
            <Button variant="outline" size="sm">
              Create Your First User
            </Button>
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-default border border-charcoal/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-charcoal/10 bg-ice-blue/30">
                  <th className="px-6 py-4 text-xs font-accent font-bold uppercase tracking-wider text-primary">
                    Staff Member
                  </th>
                  <th className="px-6 py-4 text-xs font-accent font-bold uppercase tracking-wider text-primary">
                    Username
                  </th>
                  <th className="px-6 py-4 text-xs font-accent font-bold uppercase tracking-wider text-primary">
                    User ID (Required for login)
                  </th>
                  <th className="px-6 py-4 text-xs font-accent font-bold uppercase tracking-wider text-primary">
                    Assigned Projects
                  </th>
                  <th className="px-6 py-4 text-xs font-accent font-bold uppercase tracking-wider text-primary text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-ice-blue/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-charcoal/10 bg-ice-blue/20 flex-shrink-0">
                          {user.profilePicture ? (
                            <Image
                              src={user.profilePicture}
                              alt={user.name || "User"}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-charcoal/40 font-display font-bold text-lg">
                              {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-body text-sm font-bold text-primary">
                            {user.name}
                          </p>
                          <p className="text-xs text-charcoal/50">
                            {user.jobTitle || "No title set"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-body text-primary font-bold">
                      {user.username}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <code className="text-xs font-mono bg-ice-blue/40 px-2 py-1 rounded text-primary">
                          {user.id}
                        </code>
                        <button
                          onClick={() => copyToClipboard(user.id)}
                          className="text-charcoal/50 hover:text-ocean transition-colors"
                          title="Copy User ID"
                        >
                          {copiedId === user.id ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {user.assignedProjects.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {user.assignedProjects.map((p) => (
                            <span
                              key={p.id}
                              className="text-[10px] bg-ice-blue/50 text-primary border border-charcoal/5 px-2 py-0.5 rounded-full"
                            >
                              {p.title}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-charcoal/40">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link href={`/admin/dashboard/users/${user.id}`}>
                          <button
                            className="p-2 border border-charcoal/10 hover:bg-ice-blue/20 hover:border-ocean hover:text-ocean rounded-lg text-charcoal/60 transition-colors"
                            title="Edit User"
                          >
                            <Edit size={16} />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(user.id, user.name || "Staff")}
                          className="p-2 border border-charcoal/10 hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 rounded-lg text-charcoal/60 transition-colors"
                          title="Delete User"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
