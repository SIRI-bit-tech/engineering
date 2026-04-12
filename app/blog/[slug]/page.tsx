import { SITE_NAME, BLOG_POSTS } from "@/constants/constants";
import { PageHero } from "@/components/layout/PageHero";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Readonly<BlogPostPageProps>) {
  const { params } = props;
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage(props: Readonly<BlogPostPageProps>) {
  const { params } = props;
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

      <section className="bg-white py-24 md:py-40 relative overflow-hidden">
        {/* Background Architectural Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-blue/10 -skew-x-12 translate-x-1/2 z-0" />

        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
            {/* Main Article Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center space-x-8 mb-12 text-charcoal/40 font-mono text-[10px] uppercase tracking-[0.2em]">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-3 text-ocean" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-3 text-ocean" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-3 text-ocean" />
                  {post.author}
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:font-body prose-p:text-charcoal/70 prose-blockquote:border-l-8 prose-blockquote:border-ocean prose-blockquote:bg-ice-blue/10 prose-blockquote:p-10 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-24 pt-12 border-t border-charcoal/5 flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-6">
                  <span className="font-accent font-bold uppercase tracking-[0.2em] text-[10px] text-primary/40">Share Protocol</span>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center text-primary hover:bg-ocean hover:text-white transition-all duration-500">
                      <LinkedinIcon size={18} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center text-primary hover:bg-ocean hover:text-white transition-all duration-500">
                      <TwitterIcon size={18} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center text-primary hover:bg-ocean hover:text-white transition-all duration-500">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <Link
                  href="/blog"
                  className="flex items-center gap-4 text-ocean font-accent font-bold uppercase tracking-[0.2em] text-xs group"
                >
                  <ArrowLeft size={16} className="transition-transform duration-500 group-hover:-translate-x-2" />
                  <span>Back to All Insights</span>
                </Link>
              </div>
            </div>

            {/* Sidebar (Editorial Style) */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                <div className="p-12 bg-white rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,37,59,0.08)] border border-primary/5">
                  <h4 className="text-xl font-display font-bold text-primary mb-10 italic">Author Profile</h4>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-ocean flex items-center justify-center text-white font-display font-bold text-2xl">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-lg font-display font-bold text-primary">{post.author}</div>
                      <div className="text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.2em]">Senior Technical Lead</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal/60 font-body leading-relaxed">
                    Expert in large-scale industrial energy deployments and smart grid architecture.
                  </p>
                </div>

                <div className="p-10 bg-primary text-white rounded-[2rem] border-l-8 border-ocean shadow-button relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <h5 className="font-display font-bold text-2xl mb-6 leading-tight relative z-10 italic">&quot;Stay Informed&quot;</h5>
                  <p className="text-base text-white/60 font-body mb-8 leading-relaxed relative z-10">
                    Subscribe to our engineering protocol updates for the latest in global energy infrastructure.
                  </p>
                  <form className="relative z-10">
                    <input
                      type="email"
                      placeholder="Engineering Email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white font-body text-sm focus:outline-none focus:border-ocean transition-all duration-500 mb-4"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-ocean hover:text-white rounded-xl py-4 font-accent font-bold text-[10px] uppercase tracking-[0.3em] transition-all duration-500">
                      Join Protocol
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
