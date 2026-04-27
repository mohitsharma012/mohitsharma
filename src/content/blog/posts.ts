import { metadata as behavioralInterviewMetadata } from "./behavioral-interview-questions-2026-star-answers.mdx";

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  readingTime?: string;
};

export type Post = {
  slug: string;
} & PostMetadata;

export const posts: Post[] = [
  {
    slug: "behavioral-interview-questions-2026-star-answers",
    ...(behavioralInterviewMetadata as PostMetadata),
  },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
