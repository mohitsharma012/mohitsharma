import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { posts, getPost } from "@/content/blog/posts";
import { profile } from "@/data/site";

const SITE_URL = "https://mohitsharma.co";

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

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
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
      </article>
    </div>
  );
}
