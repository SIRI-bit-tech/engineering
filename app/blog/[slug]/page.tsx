import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Placeholder blog data - same as in app/blog/page.tsx
const BLOG_POSTS = [
  {
    title: "The Future of Solar Energy in Nigeria's Industrial Zones",
    slug: "future-solar-nigeria-industrial",
    excerpt: "Exploring how large-scale solar farm deployments are transforming power stability for manufacturing plants across Lagos and Ogun states.",
    content: `
      <p>The industrial landscape of Nigeria is undergoing a massive shift towards sustainable energy. As the national grid continues to face challenges, large-scale solar farm deployments are emerging as the most reliable solution for high-demand manufacturing facilities.</p>
      
      <h2>Reliability in the Industrial Belt</h2>
      <p>Lagos and Ogun states, being the industrial heartbeat of the country, require constant and stable power to maintain production cycles. Solar technology, integrated with advanced battery storage systems, is now capable of meeting these needs.</p>
      
      <h3>Technical Integration</h3>
      <p>Our engineers have developed hybrid inverter systems that seamlessly switch between solar, grid, and diesel generation, ensuring that industrial processes are never interrupted. These systems are monitored in real-time using SCADA technology, allowing for predictive maintenance and optimized energy usage.</p>
      
      <blockquote>"Sustainable power is not just an environmental choice; it's a critical economic imperative for the African industrial sector." - Engr. David Adeyemi</blockquote>
      
      <h2>Economic Viability</h2>
      <p>While the initial capital expenditure for a 15MW solar farm is significant, the long-term operational savings are undeniable. We have seen manufacturing plants reduce their energy costs by over 40% within the first two years of deployment.</p>
    `,
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
    content: `
      <p>In the world of industrial automation, power quality is paramount. Even minor voltage fluctuations can cause catastrophic failures in sensitive PLC and SCADA systems, leading to significant production downtime.</p>
      
      <h2>Identifying Power Quality Issues</h2>
      <p>Our energy audit teams often find that many industrial facilities suffer from harmonic distortion and transient voltage surges that go unnoticed until a system failure occurs.</p>
      
      <h3>Mitigation Strategies</h3>
      <p>Implementing active power filters and robust surge protection systems is the first step in safeguarding automation infrastructure. We also recommend regular power quality analysis using advanced thermal imaging and harmonic analyzers.</p>
    `,
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
    content: `
      <p>As African urban centers grow, the demand for smart, sustainable infrastructure becomes more urgent. Smart grids are at the heart of this urban evolution, providing the intelligence needed to manage complex energy flows.</p>
      
      <h2>Urban Energy Management</h2>
      <p>Modern electrical distribution networks are no longer just about moving power from point A to point B. They are now dynamic systems that can integrate renewable sources, manage peak loads, and provide real-time data for urban planners.</p>
    `,
    date: "2024-03-15",
    author: "Engr. Michael Chen",
    category: "Power Distribution",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read"
  }
];

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="flex flex-col">
      <PageHero
        badge={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-12 flex flex-wrap items-center gap-8 text-charcoal/40 font-mono text-xs uppercase tracking-widest border-b border-ocean/10 pb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-3 text-ocean" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-3 text-ocean" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-3 text-ocean" />
                  {post.author}
                </div>
              </div>

              <div 
                className="prose prose-lg prose-ocean max-w-none font-body text-charcoal/70 leading-relaxed
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary prose-headings:mb-8 prose-headings:mt-16
                prose-p:mb-8 prose-blockquote:border-l-4 prose-blockquote:border-ocean prose-blockquote:bg-ice-blue/30 prose-blockquote:p-8 prose-blockquote:italic
                prose-strong:text-primary prose-li:mb-2 prose-h2:text-3xl prose-h3:text-2xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-20 pt-12 border-t border-ocean/10 flex items-center justify-between">
                <Link href="/blog" className="flex items-center text-ocean font-accent font-bold uppercase tracking-widest text-xs hover:-translate-x-2 transition-transform duration-300">
                  <ArrowLeft size={18} className="mr-3" />
                  Back to Engineering Insights
                </Link>
                <button className="flex items-center text-ocean font-accent font-bold uppercase tracking-widest text-xs hover:scale-110 transition-transform duration-300">
                  <Share2 size={18} className="mr-3" />
                  Share Technical Insight
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                <div className="p-10 bg-ice-blue/30 border border-ocean/5 shadow-default">
                  <h4 className="text-xl font-heading font-bold text-primary mb-8">Related Insights</h4>
                  <div className="space-y-10">
                    {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2).map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                        <div className="relative aspect-video overflow-hidden mb-6">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <h5 className="text-lg font-heading font-bold text-primary group-hover:text-ocean transition-colors duration-300 leading-tight mb-4">
                          {p.title}
                        </h5>
                        <div className="flex items-center text-ocean font-accent font-bold uppercase tracking-widest text-[10px]">
                          <span>Read Article</span>
                          <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-primary text-white border-l-4 border-ocean shadow-xl">
                  <h5 className="font-heading font-bold text-xl mb-6">Engineering Consultation</h5>
                  <p className="text-sm text-white/70 font-body mb-10 leading-relaxed">
                    Need a technical audit or project plan? Our certified engineers are ready to support your energy infrastructure.
                  </p>
                  <Button href="/contact/get-a-quote" className="w-full py-4">
                    Request Technical Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
