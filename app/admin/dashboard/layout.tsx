"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, Tag, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-ice-blue/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-charcoal/60 font-body">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/admin/login");
    return null;
  }

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
    { name: "Categories", href: "/admin/dashboard/categories", icon: Tag },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-ice-blue/20">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-primary transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <Link href="/admin/dashboard" className="flex items-center space-x-3">
                <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-white">
                  <span className="text-primary font-display font-bold text-xl z-10">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display font-bold text-lg leading-none">
                    VoltaEdge
                  </span>
                  <span className="text-ocean font-accent text-[8px] font-bold uppercase tracking-wider mt-1">
                    Admin
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href + "/") && item.href !== "/admin/dashboard");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-ocean text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon size={20} />
                  <span className="font-accent font-bold text-sm uppercase tracking-wider">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* User info & logout */}
          <div className="p-4 border-t border-white/10">
            <div className="mb-4 px-4">
              <p className="text-white/40 font-accent text-[10px] uppercase tracking-wider mb-1">
                Signed in as
              </p>
              <p className="text-white font-body text-sm truncate">
                {session?.user?.email}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 w-full"
            >
              <LogOut size={20} />
              <span className="font-accent font-bold text-sm uppercase tracking-wider">
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="bg-white border-b border-charcoal/5 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-charcoal/60 hover:text-charcoal"
            >
              <Menu size={24} />
            </button>
            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl font-display font-bold text-primary">
                Admin Dashboard
              </h1>
            </div>
            <Link href="/" target="_blank">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                View Site
              </Button>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
