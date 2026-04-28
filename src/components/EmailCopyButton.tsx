"use client";

import { useState } from "react";

export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers / non-secure contexts.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      onClick={copyEmail}
      type="button"
      aria-label={copied ? "Email copied" : `Copy email ${email}`}
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] hover:opacity-80 transition-all cursor-pointer"
    >
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          Email copied!
        </>
      ) : (
        <>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
          </svg>
          Say hello
        </>
      )}
    </button>
  );
}
