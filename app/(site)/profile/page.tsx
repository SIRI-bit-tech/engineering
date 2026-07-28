"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  MapPin,
  Globe,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  GraduationCap,
  Award as AwardIcon,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Trophy,
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
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      fetchProfile();
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [status]);

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
      <div className="min-h-screen bg-[#001D2F] flex items-center justify-center pt-24">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-ocean border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60 font-accent text-xs uppercase tracking-widest">
            Loading Engineer Profile...
          </p>
        </div>
      </div>
    );
  }

  if (!session || !profile) {
    return (
      <div className="min-h-screen bg-[#001D2F] flex items-center justify-center px-4 pt-24 pb-12">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center mx-auto text-ocean">
            <ShieldCheck size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-white uppercase">
              Staff Portal Access
            </h2>
            <p className="text-sm text-white/60 font-body">
              Please sign in with your staff account credentials to view your engineer profile.
            </p>
          </div>
          <Button asChild className="w-full bg-ocean hover:bg-ocean/90 text-white font-accent font-bold uppercase tracking-wider h-12 rounded-xl">
            <Link href="/login">Sign In to Staff Portal</Link>
          </Button>
        </div>
      </div>
    );
  }

  const ongoingProjects = profile.assignedProjects.filter(
    (p) => p.status === "Ongoing"
  );
  const completedProjects = profile.assignedProjects.filter(
    (p) => p.status === "Completed"
  );

  const awardsList: AwardItem[] = Array.isArray(profile.awards) ? profile.awards : [];

  // Formatted Biography (Replacing [Name] and [XX])
  let rawBio = profile.bio || "";
  if (rawBio.includes("partners with clients across the United States and Mexico")) {
    rawBio = rawBio.replace(
      "partners with clients across the United States and Mexico, including significant work throughout Arizona",
      "collaborates and partners with clients and companies mainly in the United States and other global regions, including East Asia, North Asia, South Asia, Oceania, and Europe"
    );
  }

  const formattedBio = rawBio
    .replace(/\[Name\]/gi, profile.name || "The engineer")
    .replace(/\[XX\]/gi, (profile.yearsOfExperience || 25).toString());

  const bioParagraphs = formattedBio.split(/\n\n+/).filter(Boolean);

  // Formatted Achievements & Past Projects
  const parsePastWorks = (text: string) => {
    if (!text) return [];
    const blocks = text.split(/\n\n+/).filter(Boolean);
    return blocks.map((block) => {
      const lines = block.split(/\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length >= 2) {
        return { title: lines[0], description: lines.slice(1).join(" ") };
      }
      return { title: lines[0], description: "" };
    });
  };

  const pastWorksItems = parsePastWorks(profile.pastWorks || "");

  return (
    <div className="min-h-screen bg-[#001D2F] text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Energy Mesh & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="profile-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#profile-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 space-y-12">
        {/* Profile Hero Header Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-ocean/40 shadow-2xl flex-shrink-0 bg-[#00253B]">
            {profile.profilePicture ? (
              <Image
                src={profile.profilePicture}
                alt={profile.name || "Engineer Avatar"}
                fill
                className="object-cover"
                sizes="176px"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold font-display text-ocean bg-[#00253B]">
                {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
              </div>
            )}
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider mb-2">
                {profile.jobTitle || "Senior Electrical Engineer"}
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide">
                {profile.name}
              </h1>
              <p className="text-sm font-bold text-ocean mt-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <Briefcase size={16} className="text-ocean flex-shrink-0" />
                <span>MD/CEO of VoltaEdge Engineering</span>
              </p>
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
                        Company Commission Year
                      </p>
                      <p className="text-sm font-body">
                        {new Date(profile.startDate).getUTCFullYear()}
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
            {bioParagraphs.length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl space-y-4">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4 mb-4">
                  Professional Biography
                </h3>
                {bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-white/85 font-body leading-relaxed text-sm">
                    {para.trim()}
                  </p>
                ))}
              </div>
            )}

            {/* Good Remarks Section */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl space-y-4">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4 mb-4 flex items-center gap-2">
                <Sparkles className="text-ocean" size={20} />
                <span>Good Remarks & Executive Endorsements</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                  <p className="text-xs text-white/85 italic font-body leading-relaxed">
                    &ldquo;An extraordinary engineering leader whose expertise in power circulation and grid modernization has consistently ensured optimal reliability across high-stakes industrial projects.&rdquo;
                  </p>
                  <p className="text-[11px] font-accent font-bold uppercase text-ocean text-right">
                    — Board of Technical Directors, VoltaEdge
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                  <p className="text-xs text-white/85 italic font-body leading-relaxed">
                    &ldquo;Known for exceptional technical integrity, precise analytical troubleshooting, and unwavering dedication to safety and international engineering excellence.&rdquo;
                  </p>
                  <p className="text-[11px] font-accent font-bold uppercase text-ocean text-right">
                    — Global Infrastructure Standards Review
                  </p>
                </div>
              </div>
            </div>

            {/* Past Works section */}
            {pastWorksItems.length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider border-b border-white/10 pb-4">
                  Achievements & Past Projects
                </h3>
                <div className="space-y-4">
                  {pastWorksItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 hover:border-ocean/40 rounded-2xl p-5 space-y-2 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-ocean flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <h4 className="font-display font-bold text-white uppercase text-sm tracking-wide group-hover:text-ocean transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      {item.description && (
                        <p className="text-xs text-white/75 font-body leading-relaxed pl-5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
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
                <p className="text-sm text-white/50 italic bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                  No active deployments currently assigned.
                </p>
              )}
            </div>

            {/* Completed Projects Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold uppercase tracking-wide border-b border-white/10 pb-4">
                Completed Infrastructure Portfolio
              </h3>
              {completedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/50 italic bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                  No completed projects listed yet.
                </p>
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
    <div className="bg-white/5 border border-white/10 hover:border-ocean/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-lg">
      <div className="relative h-44 w-full bg-[#00253B] overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 font-mono text-xs">
            NO IMAGE
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D2F] via-transparent to-transparent opacity-80" />
        <span className="absolute top-3 right-3 bg-ocean/90 text-white font-accent font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
          {project.category?.name || "Infrastructure"}
        </span>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-[10px] text-white/50 font-mono">
            <MapPin size={12} className="text-ocean" />
            <span>{project.location}</span>
          </div>
          <h4 className="text-sm font-display font-bold uppercase tracking-wide group-hover:text-ocean transition-colors line-clamp-1">
            {project.title}
          </h4>
          <p className="text-xs text-white/70 font-body leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-accent font-bold uppercase tracking-wider text-ocean hover:text-white transition-colors"
          >
            <span>Inspect Project</span>
            <CheckCircle2 size={12} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
