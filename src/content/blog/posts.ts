import { metadata as behavioralInterviewMetadata } from "./behavioral-interview-questions-2026-star-answers.mdx";
import { metadata as starMethodMetadata } from "./star-method-engineer-interviews-2026.mdx";

export type FAQ = { question: string; answer: string };

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  /** ISO date of last meaningful update — used by sitemap and Article schema. Falls back to `date`. */
  lastModified?: string;
  readingTime?: string;
  /** Optional Q&A pairs rendered as FAQPage JSON-LD. */
  faqs?: FAQ[];
};

export type Post = {
  slug: string;
} & PostMetadata;

export const posts: Post[] = [
  {
    slug: "behavioral-interview-questions-2026-star-answers",
    ...(behavioralInterviewMetadata as PostMetadata),
  },
  {
    slug: "star-method-engineer-interviews-2026",
    ...(starMethodMetadata as PostMetadata),
  },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
