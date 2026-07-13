import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/app/data/siteData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-400 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-amber-400 transition-colors shrink-0">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors shrink-0">Blog</Link>
            <span>/</span>
            <span className="text-slate-200 line-clamp-1">{post.title}</span>
          </nav>
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-a:text-amber-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Need Legal Advice?</h3>
            <p className="text-slate-600 text-sm mb-4">
              Our experienced solicitors are ready to help with your divorce or family law matter.
            </p>
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow block"
                >
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-bold text-slate-800 mt-1 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-400">{p.date} · {p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
