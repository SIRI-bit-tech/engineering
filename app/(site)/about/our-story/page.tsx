import { SITE_NAME, MISSION_STATEMENT, VISION_STATEMENT, CORE_VALUES } from "@/constants/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Eye, Shield, Lightbulb, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Our Mission, Vision & Core Values | ${SITE_NAME}`,
  description: "Learn about VoltaEdge Engineering's mission, vision, and core engineering values that drive our commitment to excellence in energy infrastructure.",
  keywords: ["engineering mission", "company vision", "core values", "quality policy", "PE certified", "engineering excellence"],
};

const getValueIcon = (iconName: string) => {
  switch (iconName) {
    case "verified_user": return <Shield className="w-8 h-8" />;
    case "health_and_safety": return <Shield className="w-8 h-8" />;
    case "architecture": return <Rocket className="w-8 h-8" />;
    case "eco": return <Leaf className="w-8 h-8" />;
    case "lightbulb": return <Lightbulb className="w-8 h-8" />;
    case "handshake": return <Users className="w-8 h-8" />;
    default: return <Rocket className="w-8 h-8" />;
  }
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 md:pt-40 md:pb-32 border-b border-charcoal/5">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-ocean" />
                <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">Leadership & Vision</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-8 leading-tight">
                Our Mission, Vision & Core Engineering Values
              </h1>

              <p className="text-lg md:text-xl text-charcoal/60 font-body leading-relaxed">
                At VoltaEdge Engineering, we are driven by a commitment to technical excellence, sustainable innovation, and unwavering integrity in every project we undertake across the United States.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering precision and innovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary py-20 md:py-24 text-white">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-ocean flex items-center justify-center shrink-0">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Mission</h2>
                <p className="text-lg md:text-xl text-white/80 font-body leading-relaxed">
                  {MISSION_STATEMENT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-ice-blue/30 py-20 md:py-24">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-ocean flex items-center justify-center shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-lg md:text-xl text-charcoal/70 font-body leading-relaxed">
                  {VISION_STATEMENT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="bg-white py-24 md:py-40">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-ocean" />
              <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">Our Foundation</span>
              <div className="w-12 h-px bg-ocean" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Core Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {CORE_VALUES.map((value) => (
              <div
                key={value.ref}
                className="group p-10 bg-white border border-charcoal/5 hover:border-ocean/20 rounded-2xl shadow-default hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mb-8 group-hover:bg-ocean group-hover:scale-110 transition-all duration-500">
                  <div className="text-ocean group-hover:text-white transition-colors duration-500">
                    {getValueIcon(value.icon)}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-ocean transition-colors duration-500">
                  {value.title}
                </h3>

                <p className="text-base text-charcoal/60 font-body leading-relaxed mb-6">
                  {value.description}
                </p>

                <div className="text-xs font-mono text-ocean/40 uppercase tracking-widest">
                  {value.ref}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="bg-ice-blue/20 py-24 md:py-32">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-ocean" />
              <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">ISO 9001 Certified</span>
              <div className="w-12 h-px bg-ocean" />
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12">
              Quality Policy Statement
            </h2>

            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-2xl border-l-8 border-ocean">
              <p className="text-xl md:text-2xl text-charcoal/70 font-body leading-relaxed italic mb-12">
                &quot;VoltaEdge Engineering is committed to delivering technical excellence and uncompromising quality in every project. Our Quality Management System ensures continuous improvement, adherence to safety protocols, and the highest standards of engineering precision in all our operations.&quot;
              </p>

              <div className="flex items-center justify-center gap-8 pt-8 border-t border-charcoal/10">
                <div className="w-16 h-16 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-ocean" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-accent font-bold uppercase tracking-widest text-ocean mb-1">
                    Quality Assurance
                  </div>
                  <div className="text-xs text-charcoal/40 font-mono">
                    ISO 9001:2015 Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ocean/10 -skew-x-12 translate-x-1/2" />

        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/70 font-body mb-12 leading-relaxed">
              Partner with our elite engineering team to architect your next high-performance energy system with precision and innovation.
            </p>
            <Button
              asChild
              className="bg-white text-primary hover:bg-ocean hover:text-white font-accent font-bold text-xs uppercase tracking-[0.2em] px-12 py-6 rounded-xl shadow-button transition-all duration-500 hover:-translate-y-2"
            >
              <Link href="/contact/get-a-quote">Get Started →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
