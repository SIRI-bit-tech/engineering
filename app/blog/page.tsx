import { SITE_NAME, BLOG_POSTS } from "@/constants/constants";
import { PageHero } from "@/components/layout/PageHero";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: `Engineering Blog | ${SITE_NAME}`,
  description: "Stay updated with the latest trends in electrical engineering, multi-source renewable energy, and industrial automation.",
  keywords: ["engineering blog", "renewable energy trends", "industrial automation insights", "power distribution news", "certified engineers USA", "PE certified"],
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Insights"
        title="Knowledge, Innovation & Industry Trends"
        description="Our elite engineers share deep-dive insights into renewable energy, industrial automation, and the future of American power infrastructure."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYf6pC3p86pP198B7R9E2B-u4G1D237J281v9R8E3B6C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9"
      />

      <section className="bg-white py-24 md:py-40 overflow-hidden relative">
        {/* Background Architectural Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-blue/10 -skew-x-12 translate-x-1/2 z-0" />

        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          {/* Filter Bar (Editorial Style) */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 border-b border-charcoal/5 pb-12">
            <div className="flex items-center gap-6 text-primary">
              <div className="w-10 h-10 rounded-none bg-ocean/10 flex items-center justify-center">
                <Filter size={16} className="text-ocean" />
              </div>
              <span className="font-label font-bold uppercase tracking-[0.3em] text-[10px]">Filter Insights</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {["All", "Infrastructure", "Industrial Tech", "Automation", "Renewable Energy"].map((cat) => (
                <button
                  key={cat}
                  className={`px-8 py-3 font-label text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-none ${cat === "All"
                      ? "bg-primary text-white shadow-button"
                      : "bg-ice-blue/30 text-charcoal/60 hover:bg-ocean hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {BLOG_POSTS.map((post, idx) => (
              <article key={post.slug} className="group flex flex-col h-full bg-white rounded-none shadow-default hover:shadow-hover hover:-translate-y-4 transition-all duration-700 overflow-hidden">
                <div className="relative aspect-16/10 overflow-hidden m-4 rounded-none">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-6 py-2 bg-white/95 backdrop-blur-md text-primary font-label text-[10px] font-bold uppercase tracking-[0.3em] rounded-none">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 md:p-12 flex flex-col flex-1">
                  {/* Technical Marker */}
                  <div className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40 mb-10 flex items-center gap-4">
                    <span className="text-ocean font-bold">INSIGHT-0{idx + 1}</span>
                    <div className="h-px w-8 bg-charcoal/10 group-hover:w-full transition-all duration-700" />
                  </div>

                  <div className="flex items-center space-x-8 mb-8 text-charcoal/40 font-mono text-[10px] uppercase tracking-[0.2em]">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-3 text-ocean" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-3 text-ocean" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 group-hover:text-ocean transition-colors duration-500 leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-base text-charcoal/60 font-body mb-12 line-clamp-3 leading-relaxed italic">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-10 border-t border-charcoal/5 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-none bg-ocean/10 flex items-center justify-center text-ocean font-display font-bold text-xs">
                        {post.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary/60">{post.author}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-12 h-12 rounded-none border border-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
