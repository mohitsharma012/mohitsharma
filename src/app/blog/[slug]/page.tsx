import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { posts, getPost, type Post } from "@/content/blog/posts";
import { profile, SITE_URL } from "@/data/site";

function buildArticleSchema(post: Post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    author: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: profile.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${profile.avatar}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${SITE_URL}${profile.avatar}`,
  };
}

function buildFAQSchema(post: Post) {
  if (!post.faqs || post.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: `${post.title} — ${profile.name}`,
    description: post.description,
    authors: [{ name: profile.name, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      authors: [profile.name],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
      creator: profile.name,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFAQSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema(post);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
      {/* Structured data — Article + optional FAQPage + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#888] dark:text-[#666] mb-12 min-w-0"
        >
          <Link
            href="/"
            className="shrink-0 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <span aria-hidden="true" className="shrink-0 text-[#ccc] dark:text-[#444]">/</span>
          <Link
            href="/blog"
            className="shrink-0 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          >
            All posts
          </Link>
          <span aria-hidden="true" className="shrink-0 text-[#ccc] dark:text-[#444]">/</span>
          <span
            aria-current="page"
            className="truncate text-[#1a1a1a] dark:text-[#e5e5e5]"
            title={post.title}
          >
            {post.title}
          </span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3 text-[#1a1a1a] dark:text-[#e5e5e5]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#888] dark:text-[#666]">
            <span className="text-[#1a1a1a] dark:text-[#e5e5e5] font-medium">
              {profile.name}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date} className="tabular-nums">
              {formatDate(post.date)}
            </time>
            {post.readingTime && (
              <>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{post.readingTime}</span>
              </>
            )}
          </div>
        </header>

        {/* Post content */}
        <div className="[&>*:first-child]:mt-0">
          <Post />
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-[#eee] dark:border-[#1a1a1a]">
          <p className="text-[11px] text-[#bbb] dark:text-[#555]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </article>
    </div>
  );
}
