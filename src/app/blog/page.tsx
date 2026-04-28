import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { posts } from "@/content/blog/posts";
import { profile } from "@/data/site";

const SITE_URL = "https://mohitsharma.co";

export const metadata: Metadata = {
  title: "Writing — Mohit Sharma",
  description:
    "Essays and notes from Mohit Sharma on building LLM applications, shipping AI products, and the craft of full-stack engineering.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Writing — Mohit Sharma",
    description:
      "Essays and notes from Mohit Sharma on building LLM applications, shipping AI products, and the craft of full-stack engineering.",
    type: "website",
    url: `${SITE_URL}/blog`,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Writing — Mohit Sharma",
  description:
    "Notes on building AI systems, shipping products, and what actually works in practice.",
  url: `${SITE_URL}/blog`,
  author: {
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
  },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    author: { "@type": "Person", name: profile.name, url: SITE_URL },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
      {/* Structured data — Blog + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white/80 dark:bg-[#111]/80 backdrop-blur-sm text-[#555] dark:text-[#999] shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#888] dark:text-[#666] mb-10">
          <Link href="/" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-[#ccc] dark:text-[#444]">/</span>
          <span aria-current="page" className="text-[#1a1a1a] dark:text-[#e5e5e5]">
            All posts
          </span>
        </nav>

        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
           Notes
          </h1>
          <p className="text-base leading-relaxed text-[#555] dark:text-[#999] max-w-xl">
          Notes on building AI systems, shipping products, and what actually works in practice.
          </p>
        </header>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-sm text-[#888] dark:text-[#666]">First post coming soon.</p>
        ) : (
          <ul className="divide-y divide-[#eaeaea] dark:divide-[#1e1e1e] border-y border-[#eaeaea] dark:border-[#1e1e1e]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-5 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[15px] font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] group-hover:text-[#555] dark:group-hover:text-[#bbb] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[13px] text-[#888] dark:text-[#666] mt-1 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#bbb] dark:text-[#666] tabular-nums shrink-0">
                    {post.readingTime && <span>{post.readingTime}</span>}
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-[#eee] dark:border-[#1a1a1a]">
          <p className="text-[11px] text-[#bbb] dark:text-[#555]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
