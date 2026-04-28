import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Not found — Mohit Sharma",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300 flex flex-col">
      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white/80 dark:bg-[#111]/80 backdrop-blur-sm text-[#555] dark:text-[#999] shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#666] dark:text-[#888] mb-3 text-center">
            404 — Not found
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            This page wandered off.
          </h1>
          <p className="text-base leading-relaxed text-[#555] dark:text-[#999] mb-8 text-center">
            The link is broken, or the page never existed. Try one of these instead.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] hover:opacity-80 transition-all"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7l6-5 6 5v7a1 1 0 0 1-1 1h-3v-5H6v5H3a1 1 0 0 1-1-1V7Z" />
              </svg>
              Go home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#555] dark:text-[#999] hover:border-[#bbb] dark:hover:border-[#444] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 2h7l3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
                <path d="M10 2v3h3" />
                <path d="M5 8h6M5 11h4" />
              </svg>
              Read the blog
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto px-6 pb-8">
        <div className="pt-8 border-t border-[#eee] dark:border-[#1a1a1a]">
          <p className="text-[11px] text-[#bbb] dark:text-[#555]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
