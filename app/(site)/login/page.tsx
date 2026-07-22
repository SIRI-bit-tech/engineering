"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Image from "next/image";

export default function UserLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        username: username.toLowerCase().trim(),
        userId: userId.trim(),
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid Username or User ID");
      } else {
        toast.success("Login successful");
        router.push("/profile");
        router.refresh();
      }
    } catch (error) {
      toast.error("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#00253B] flex items-center justify-center px-4 relative overflow-hidden pt-24 pb-12">
      {/* Technical Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="login-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-grid)" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
              <Image
                src="/logo.png"
                alt="VoltaEdge Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
              Staff Portal
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-xs font-accent font-bold uppercase tracking-[0.2em] text-white/80 mb-2 block">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. johndoe"
                required
                className="w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-ocean focus:ring-1 focus:ring-ocean rounded-xl h-12"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="userId" className="text-xs font-accent font-bold uppercase tracking-[0.2em] text-white/80 mb-2 block">
                User ID
              </Label>
              <Input
                id="userId"
                type="password"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your system-generated CUID"
                required
                className="w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-ocean focus:ring-1 focus:ring-ocean rounded-xl h-12"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider h-12 rounded-xl transition-all duration-300 hover:shadow-button"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
