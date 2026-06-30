import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Mohit Sharma",
  description: "Privacy policy for mohitsharma.co — what data is collected and how it is used.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white/80 dark:bg-[#111]/80 backdrop-blur-sm text-[#555] dark:text-[#999] shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#888] dark:text-[#666] mb-10">
          <Link href="/" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-[#ccc] dark:text-[#444]">/</span>
          <span aria-current="page" className="text-[#1a1a1a] dark:text-[#e5e5e5]">
            Privacy
          </span>
        </nav>

        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-sm text-[#888] dark:text-[#666]">Last updated: June 30, 2026</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-[#444] dark:text-[#aaa] leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Overview</h2>
            <p>
              This site (<strong>mohitsharma.co</strong>) is a personal portfolio. It does not sell products,
              collect registrations, or process payments. This policy describes what limited data is
              collected and why.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Analytics</h2>
            <p>
              This site uses <strong>Google Analytics 4</strong> and <strong>Vercel Analytics</strong> to
              understand traffic patterns (which pages are visited, referral sources, general geography).
              Both services collect anonymised, aggregated data. No personally identifiable information is
              stored by this site. You can opt out of Google Analytics using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="underline hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics opt-out browser add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Cookies</h2>
            <p>
              Analytics services set cookies to distinguish unique visitors. This site itself sets one
              cookie: <code className="text-xs bg-[#f0f0f0] dark:bg-[#1a1a1a] px-1 py-0.5 rounded">theme</code>,
              which stores your light/dark/terminal mode preference locally. It contains no personal data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Contact</h2>
            <p>
              If you reach out by email, your message and email address are used only to respond to you.
              They are not shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Third-party links</h2>
            <p>
              This site links to external services (GitHub, LinkedIn, live project demos). Those sites have
              their own privacy policies and this policy does not cover them.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Changes</h2>
            <p>
              This policy may be updated occasionally. The date at the top of this page reflects the most
              recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-[#e5e5e5] mb-2">Contact</h2>
            <p>
              Questions? Email{" "}
              <a
                href="mailto:stayer.mohit@gmail.com"
                className="underline hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
              >
                stayer.mohit@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e0e0e0] dark:border-[#2a2a2a]">
          <Link
            href="/"
            className="text-sm text-[#888] dark:text-[#666] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
