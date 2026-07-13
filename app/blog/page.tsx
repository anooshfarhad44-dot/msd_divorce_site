import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import Card from "@/app/components/ui/Card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Family law insights, guides, and commentary from the solicitors at MSD Solicitors.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Family Law Blog"
        subtitle="Practical guides and expert commentary from our team of family law solicitors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} hover className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="text-base font-bold text-slate-800 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
