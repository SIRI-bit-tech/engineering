import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: `Engineering Insights | ${SITE_NAME}`,
  description: "Stay updated with the latest trends in electrical engineering, renewable energy, and industrial automation in Africa.",
  keywords: ["engineering blog", "solar energy trends", "industrial automation insights", "power distribution news"],
};

// Placeholder blog data
const BLOG_POSTS = [
  {
    title: "The Future of Solar Energy in Nigeria's Industrial Zones",
    slug: "future-solar-nigeria-industrial",
    excerpt: "Exploring how large-scale solar farm deployments are transforming power stability for manufacturing plants across Lagos and Ogun states.",
    date: "2024-04-05",
    author: "Engr. David Adeyemi",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    title: "Optimizing Power Quality for Industrial Automation",
    slug: "optimizing-power-quality-automation",
    excerpt: "A technical guide on mitigating voltage fluctuations to protect sensitive PLC and SCADA systems in high-demand industrial environments.",
    date: "2024-03-28",
    author: "Engr. Sarah Adams",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    title: "The Role of Smart Grids in Sustainable Urban Development",
    slug: "smart-grids-urban-development",
    excerpt: "How modern electrical distribution networks are supporting the growth of smart cities and reducing carbon emissions in African urban centers.",
    date: "2024-03-15",
    author: "Engr. Michael Chen",
    category: "Power Distribution",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Engineering Insights"
        title="Technical Knowledge & Industry Trends"
        description="Our engineers share deep-dive insights into renewable energy, industrial automation, and the future of Africa's power infrastructure."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />
      
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="group flex flex-col h-full bg-white border border-ocean/10 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-ocean text-white font-accent text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-6 mb-6 text-charcoal/40 font-mono text-[10px] uppercase tracking-widest">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2 text-ocean" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2 text-ocean" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-primary mb-6 group-hover:text-ocean transition-colors duration-300 leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-charcoal/70 font-body text-sm mb-10 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-ocean/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center text-ocean">
                        <User size={14} />
                      </div>
                      <span className="text-[10px] font-accent font-bold uppercase tracking-widest text-primary">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-ocean group/link">
                      <ArrowRight size={20} className="transition-transform duration-300 group-hover/link:translate-x-2" />
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
