import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";
import { Briefcase, Users, Cpu, Rocket, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Careers | ${SITE_NAME}`,
  description: "Join the elite engineering team at VoltaEdge. We are architecting the future of energy infrastructure.",
  keywords: ["engineering jobs", "renewable energy careers", "electrical engineering positions", "work at VoltaEdge"],
};

const BENEFITS = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Projects",
    description: "Work on mission-critical infrastructure projects across continents, from subsea cabling in the North Sea to smart grids in Dubai."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Cutting-Edge Tech",
    description: "Operate with the latest BIM, digital twin technology, and AI-driven load balancing systems."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Elite Mentorship",
    description: "Collaborate with PE-certified senior engineers and industry veterans who are masters of their craft."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Career Trajectory",
    description: "We don't just offer jobs; we offer engineering legacies. Accelerate your career with structured growth paths."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Premium Benefits",
    description: "Competitive compensation, specialized technical training, and comprehensive health and wellness programs."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Innovation Culture",
    description: "An environment that rewards bold ideas and technical precision over bureaucracy."
  }
];

const JOB_OPENINGS = [
  {
    title: "Senior Electrical Design Engineer",
    location: "Houston, TX / Remote",
    type: "Full-time",
    department: "Engineering",
    ref: "VE-ENG-042"
  },
  {
    title: "Renewable Systems Architect",
    location: "Munich, Germany",
    type: "Full-time",
    department: "Sustainability",
    ref: "VE-SUS-019"
  },
  {
    title: "SCADA & Automation Specialist",
    location: "Global / Multi-site",
    type: "Contract/Full-time",
    department: "Industrial Tech",
    ref: "VE-AUT-088"
  },
  {
    title: "Substation Infrastructure Lead",
    location: "New York, NY",
    type: "Full-time",
    department: "Infrastructure",
    ref: "VE-INF-051"
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Join the Elite"
        title="Architect the Future of Energy"
        description="We are looking for the next generation of engineers, visionaries, and technical experts to join our global missions. At VoltaEdge, we don't just solve problems; we define standards."
        image="/careers_hero.png"
      />

      {/* Benefits Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-trajan font-bold text-white mb-6">The VoltaEdge Advantage</h2>
            <p className="text-white/60 font-body text-lg leading-relaxed">
              Why work with us? Because we tackle the world&apos;s most complex energy challenges.
              Our culture is built on technical absolute, unwavering integrity, and the pursuit of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ocean/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-ocean/20 flex items-center justify-center text-ocean mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-trajan font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/50 font-body leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-trajan font-bold text-primary mb-6">Current Missions</h2>
              <p className="text-primary/60 font-body text-lg leading-relaxed">
                Explore our open positions and find your next challenge. If you don&apos;t see a perfect match, we still want to hear from you.
              </p>
            </div>
            <div className="pb-2">
              <button className="px-8 py-4 bg-ocean text-white font-accent font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary transition-colors duration-300">
                General Application
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-primary/10 hover:border-ocean hover:bg-ocean/5 transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <div className="text-ocean font-accent font-bold text-[10px] tracking-[0.2em] uppercase mb-2">{job.ref}</div>
                  <h3 className="text-2xl font-trajan font-bold text-primary mb-2 group-hover:text-ocean transition-colors">{job.title}</h3>
                  <div className="flex items-center space-x-6 text-primary/40 font-body text-sm">
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> {job.location}</span>
                    <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> {job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 border border-primary/20 text-primary font-accent font-bold uppercase tracking-widest text-[10px] rounded-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  Mission Details
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-primary text-center">
            <h3 className="text-2xl md:text-3xl font-trajan font-bold text-white mb-6">Ready to lead the energy transition?</h3>
            <p className="text-white/60 font-body mb-8 max-w-xl mx-auto">
              Join a team where your expertise is recognized and your impact is global.
            </p>
            <a href="mailto:careers@voltaeedge.com" className="inline-flex items-center space-x-3 text-ocean hover:text-white transition-colors duration-300">
              <span className="font-accent font-bold uppercase tracking-widest">careers@voltaeedge.com</span>
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
