"use client";

import { useEffect, useState } from "react";
import { FolderKanban, Tag, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Stats {
  totalProjects: number;
  publishedProjects: number;
  draftProjects: number;
  ongoingProjects: number;
  completedProjects: number;
  totalCategories: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    publishedProjects: 0,
    draftProjects: 0,
    ongoingProjects: 0,
    completedProjects: 0,
    totalCategories: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projectsRes, categoriesRes] = await Promise.all([
        fetch("/api/admin/projects"),
        fetch("/api/admin/categories"),
      ]);

      const projectsData = await projectsRes.json();
      const categoriesData = await categoriesRes.json();

      const published = projectsData.projects?.filter((p: any) => p.published).length || 0;
      const total = projectsData.projects?.length || 0;
      const ongoing = projectsData.projects?.filter((p: any) => p.status === "ongoing").length || 0;
      const completed = projectsData.projects?.filter((p: any) => p.status === "completed").length || 0;

      setStats({
        totalProjects: total,
        publishedProjects: published,
        draftProjects: total - published,
        ongoingProjects: ongoing,
        completedProjects: completed,
        totalCategories: categoriesData.length || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: FolderKanban,
      color: "bg-ocean",
      href: "/admin/dashboard/projects",
    },
    {
      title: "Published",
      value: stats.publishedProjects,
      icon: Eye,
      color: "bg-green-500",
      href: "/admin/dashboard/projects?filter=published",
    },
    {
      title: "Ongoing",
      value: stats.ongoingProjects,
      icon: FolderKanban,
      color: "bg-blue-500",
      href: "/admin/dashboard/projects?status=ongoing",
    },
    {
      title: "Completed",
      value: stats.completedProjects,
      icon: FolderKanban,
      color: "bg-green-600",
      href: "/admin/dashboard/projects?status=completed",
    },
    {
      title: "Drafts",
      value: stats.draftProjects,
      icon: EyeOff,
      color: "bg-yellow-500",
      href: "/admin/dashboard/projects?filter=draft",
    },
    {
      title: "Categories",
      value: stats.totalCategories,
      icon: Tag,
      color: "bg-purple-500",
      href: "/admin/dashboard/categories",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-charcoal/60 font-body">
          Manage your projects and content from here
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <div className="bg-white rounded-2xl p-6 shadow-default hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <span className="text-3xl font-display font-bold text-primary">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-sm font-accent font-bold uppercase tracking-wider text-charcoal/60">
                {stat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-8 shadow-default">
        <h3 className="text-xl font-display font-bold text-primary mb-6">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/admin/dashboard/projects/new">
            <Button className="w-full bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider">
              Create New Project
            </Button>
          </Link>
          <Link href="/admin/dashboard/categories">
            <Button variant="outline" className="w-full font-accent font-bold uppercase tracking-wider">
              Manage Categories
            </Button>
          </Link>
          <Link href="/admin/dashboard/projects">
            <Button variant="outline" className="w-full font-accent font-bold uppercase tracking-wider">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
