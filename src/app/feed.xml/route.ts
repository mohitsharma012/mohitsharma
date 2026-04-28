import { posts } from "@/content/blog/posts";
import { SITE_URL, profile } from "@/data/site";

// Re-generate at most once an hour. Posts are static so this is plenty.
export const revalidate = 3600;

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const feedTitle = "Writing — Mohit Sharma";
  const feedDescription =
    "Notes on building AI systems, shipping products, and what actually works in practice.";
  const feedUrl = `${SITE_URL}/feed.xml`;
  const siteUrl = `${SITE_URL}/blog`;

  // Newest post (already sorted desc in posts.ts) drives the channel pubDate.
  const lastBuild =
    posts[0]?.lastModified ?? posts[0]?.date ?? new Date().toISOString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pub = new Date(post.date).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <author>${escapeXml(profile.email)} (${escapeXml(profile.name)})</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
