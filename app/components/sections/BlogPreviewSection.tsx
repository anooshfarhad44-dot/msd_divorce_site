import Link from "next/link";
import { blogPosts } from "@/app/data/siteData";

const categoryColors: Record<string, string> = {
  "Divorce Law": "bg-rose-100 text-rose-700",
  "Financial Settlements": "bg-emerald-100 text-emerald-700",
  "Child Law": "bg-blue-100 text-blue-700",
};

// Small inline article illustration per category
function ArticleIllustration({ category }: { category: string }) {
  if (category === "Divorce Law") return (
    <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
      <rect width="80" height="60" rx="8" fill="#FFF1F2"/>
      <rect x="10" y="12" width="60" height="38" rx="4" fill="white" stroke="#FECDD3" strokeWidth="1.5"/>
      <path d="M20 24h40M20 32h30M20 40h20" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="62" cy="14" r="8" fill="#F43F5E"/>
      <path d="M59 14l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (category === "Financial Settlements") return (
    <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
      <rect width="80" height="60" rx="8" fill="#F0FDF4"/>
      <rect x="12" y="18" width="32" height="28" rx="3" fill="white" stroke="#BBF7D0" strokeWidth="1.5"/>
      <path d="M18 26h20M18 32h14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M52 38 L56 28 L60 34 L64 22 L68 30" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
      <rect width="80" height="60" rx="8" fill="#EFF6FF"/>
      <circle cx="40" cy="24" r="10" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="40" cy="22" r="4" fill="#3B82F6" opacity="0.6"/>
      <path d="M26 46c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export default function BlogPreviewSection() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Latest Articles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Family Law <span className="text-amber-500">Insights</span>
            </h2>
            <p className="text-slate-500 text-lg mt-3 max-w-md">
              Practical guides and expert commentary from our solicitors.
            </p>
          </div>
          <Link href="/blog"
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold px-5 py-3 rounded-2xl transition-colors text-sm">
            All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

              {/* Article illustration */}
              <div className="h-36 overflow-hidden shrink-0">
                <ArticleIllustration category={post.category} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Category + read time */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 flex-1 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white text-xs font-bold flex items-center justify-center">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs text-slate-500">{post.author}</span>
                  </div>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
