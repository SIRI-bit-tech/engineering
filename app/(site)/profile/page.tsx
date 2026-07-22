"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  User as UserIcon, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  GraduationCap, 
  Award as AwardIcon, 
  Briefcase, 
  Clock,
  ArrowRight,
  Globe,
  Trophy,
  Medal,
  ShieldCheck,
  Zap,
  Crown,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AwardBadge } from "@/components/ui/AwardBadge";

interface Project {
  id: string;
  title: string;
  slug: string;
  status: string;
  coverImage: string;
  description: string;
  location: string;
  category: {
    name: string;
    slug: string;
  };
}

interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeType?: string;
  code?: string;
  imageUrl?: string;
}

interface UserProfile {
  id: string;
  name: string | null;
  username: string;
  email: string | null;
  bio: string | null;
  dob: string | null;
  profilePicture: string | null;
  jobTitle: string | null;
  startDate: string | null;
  pastWorks: string | null;
  yearsOfExperience: number | null;
  school: string | null;
  origin: string | null;
  livesIn: string | null;
  phoneNumber: string | null;
  awards: AwardItem[] | null;
  assignedProjects: Project[];
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      if (session.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        fetchProfile();
      }
    }
  }, [status, session, router]);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/user/profile");
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-[#00253B] flex items-center justify-center pt-24">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 font-body">Loading staff profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#00253B] flex items-center justify-center pt-24 text-white">
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Profile not found</p>
          <Button onClick={() => router.push("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  // Calculate years of service at VoltaEdge
  const calculateYearsOfService = () => {
    if (!profile.startDate) return null;
    const start = new Date(profile.startDate);
    const diff = new Date().getTime() - start.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    if (years < 1) {
      const months = Math.floor(years * 12);
      return `${months} month${months !== 1 ? "s" : ""}`;
    }
    return `${Math.floor(years)} year${Math.floor(years) !== 1 ? "s" : ""}`;
  };

  const yearsOfService = calculateYearsOfService();

  // Filter projects by status
  const ongoingProjects = profile.assignedProjects.filter((p) => p.status === "ongoing");
  const completedProjects = profile.assignedProjects.filter((p) => p.status === "completed");
  const awardsList: AwardItem[] = Array.isArray(profile.awards) ? profile.awards : [];

  return (
    <div className="min-h-screen bg-[#00253B] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="profile-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#profile-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        {/* Profile Card Header */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-ocean/30 shadow-lg bg-[#001D2F] flex-shrink-0">
            {profile.profilePicture ? (
              <Image
                src={profile.profilePicture}
                alt={profile.name || "Avatar"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/40 font-display text-5xl font-bold bg-gradient-to-tr from-primary to-ocean">
                {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
              </div>
            )}
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider mb-2">
                {profile.jobTitle || "Engineering Specialist"}
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide">
                {profile.name}
              </h1>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 pt-2 text-sm text-white/80">
              {profile.livesIn && (
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-ocean" />
                  <span>Resides in {profile.livesIn}</span>
                </div>
              )}
              {profile.origin && (
                <div className="flex items-center space-x-2">
                  <Globe size={16} className="text-ocean" />
                  <span>From {profile.origin}</span>
                </div>
              )}
              {yearsOfService && (
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-ocean" />
                  <span>{yearsOfService} at VoltaEdge</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar / Left Column - Details */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4 mb-6">
                Personnel Credentials
              </h3>
              
              <ul className="space-y-6">
                {profile.email && (
                  <li className="flex items-start space-x-3">
                    <Mail className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Email Address
                      </p>
                      <a href={`mailto:${profile.email}`} className="text-sm font-body hover:underline">
                        {profile.email}
                      </a>
                    </div>
                  </li>
                )}

                {profile.phoneNumber && (
                  <li className="flex items-start space-x-3">
                    <Phone className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Phone Number
                      </p>
                      <p className="text-sm font-body">{profile.phoneNumber}</p>
                    </div>
                  </li>
                )}

                {profile.dob && (
                  <li className="flex items-start space-x-3">
                    <Calendar className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Date of Birth
                      </p>
                      <p className="text-sm font-body">
                        {new Date(profile.dob).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </li>
                )}

                {profile.school && (
                  <li className="flex items-start space-x-3">
                    <GraduationCap className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Education & Qualifications
                      </p>
                      <p className="text-sm font-body">{profile.school}</p>
                    </div>
                  </li>
                )}

                {profile.yearsOfExperience !== null && (
                  <li className="flex items-start space-x-3">
                    <AwardIcon className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Total Industry Experience
                      </p>
                      <p className="text-sm font-body font-bold text-ocean">
                        {profile.yearsOfExperience} Years
                      </p>
                    </div>
                  </li>
                )}

                {profile.startDate && (
                  <li className="flex items-start space-x-3">
                    <Briefcase className="text-ocean mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-[10px] text-white/40 font-accent uppercase tracking-wider leading-none mb-1">
                        Company Commission Date
                      </p>
                      <p className="text-sm font-body">
                        {new Date(profile.startDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Awards & Accreditations Card */}
            {awardsList.length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <Trophy className="text-amber-400" size={20} />
                    Awards & Honors
                  </h3>
                  <span className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-amber-400/30">
                    {awardsList.length}
                  </span>
                </div>

                <div className="space-y-4">
                  {awardsList.map((award) => (
                    <div
                      key={award.id || award.title}
                      className="bg-white/5 border border-white/10 hover:border-amber-400/50 rounded-2xl p-4 flex items-center space-x-4 transition-all duration-300 group shadow-md"
                    >
                      <AwardBadge
                        code={award.code}
                        badgeType={award.badgeType}
                        imageUrl={award.imageUrl}
                        title={award.title}
                        size="md"
                        className="group-hover:scale-105 transition-transform"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-display font-bold uppercase tracking-wide truncate group-hover:text-amber-300 transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-xs text-white/60 truncate">
                          {award.issuer}
                        </p>
                        <span className="inline-block text-[10px] text-amber-300/80 font-mono mt-0.5">
                          Conferred {award.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Bio, Past Works & Project Assignments */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio section */}
            {profile.bio && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4 mb-4">
                  Professional Biography
                </h3>
                <p className="text-white/80 font-body leading-relaxed text-sm whitespace-pre-line">
                  {profile.bio}
                </p>
              </div>
            )}

            {/* Past Works section */}
            {profile.pastWorks && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4 mb-4">
                  Achievements & Past Projects
                </h3>
                <p className="text-white/80 font-body leading-relaxed text-sm whitespace-pre-line">
                  {profile.pastWorks}
                </p>
              </div>
            )}

            {/* Ongoing Projects Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold uppercase tracking-wide border-b border-white/10 pb-4">
                Ongoing Deployments
              </h3>
              {ongoingProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ongoingProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="bg-white/5 border border-white/5 rounded-3xl p-8 text-center text-white/50 text-sm">
                  No active ongoing projects assigned.
                </div>
              )}
            </div>

            {/* Projects Done Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold uppercase tracking-wide border-b border-white/10 pb-4">
                Completed Projects
              </h3>
              {completedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="bg-white/5 border border-white/5 rounded-3xl p-8 text-center text-white/50 text-sm">
                  No completed projects listed.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-ocean/50 transition-all duration-500 group flex flex-col h-full shadow-lg">
      <div className="relative h-48 w-full bg-[#001D2F] overflow-hidden flex-shrink-0">
        <Image
          src={project.coverImage || "/placeholder-project.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00253B] to-transparent opacity-60" />
        <span className="absolute bottom-4 left-4 bg-ocean text-white font-accent font-bold text-[8px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
          {project.category.name}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 space-y-3">
        <div className="flex items-center text-white/40 text-[10px] font-mono uppercase tracking-wider">
          <MapPin size={12} className="mr-1" />
          <span>{project.location}</span>
        </div>
        
        <h4 className="text-base font-display font-bold uppercase tracking-wide leading-tight group-hover:text-ocean transition-colors duration-300">
          {project.title}
        </h4>
        
        <p className="text-white/60 text-xs font-body leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="pt-4 mt-auto">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-xs font-accent font-bold uppercase tracking-wider text-ocean hover:text-white transition-colors duration-300 group/btn">
            <span>Inspect Project Spec</span>
            <ArrowRight size={14} className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
