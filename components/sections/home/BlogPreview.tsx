"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BLOG_POSTS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const BlogPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".blog-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="bg-ice-blue/30 py-24 md:py-32 border-t border-ocean/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading
            badge="Engineering Insights"
            title="Latest Technical Knowledge"
            description="Our engineers share deep-dive insights into renewable energy, industrial automation, and the future of Africa's power infrastructure."
            className="mb-0"
          />
          <Button asChild variant="outline" className="mb-2">
            <Link href="/blog">View All Insights</Link>
          </Button>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group flex flex-col md:flex-row bg-white border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video md:aspect-square md:w-2/5 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ocean text-white font-accent text-[8px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 md:w-3/5 flex flex-col">
                <div className="flex items-center space-x-6 mb-6 text-charcoal/40 font-mono text-[10px] uppercase tracking-widest">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-2 text-ocean" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="mr-2 text-ocean" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6 group-hover:text-ocean transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-charcoal/70 font-body mb-8 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto inline-flex items-center text-ocean font-accent font-semibold text-[10px] uppercase tracking-widest group/link">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="ml-3 transition-transform duration-300 group-hover/link:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
