"use client";

import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/site";

export type Role = "recruiter" | "developer" | "browser" | "nerd";

const roles = [
  {
    id: "recruiter" as Role,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Founder / Recruiter",
    subtitle: "Professional profile, LinkedIn style",
    accent: "#0a66c2",
  },
  {
    id: "developer" as Role,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Developer",
    subtitle: "Repos, code & contributions",
    accent: "#24292f",
  },
  {
    id: "browser" as Role,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Just Browsing",
    subtitle: "Visual feed of my work",
    accent: "#c13584",
  },
  {
    id: "nerd" as Role,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
      </svg>
    ),
    title: "Nerd",
    subtitle: "Clean, minimal, no fluff",
    accent: "#18181b",
  },
];

export default function RoleChooser({
  onSelect,
}: {
  onSelect: (role: Role) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-10">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="min-h-full flex items-center justify-center px-4 md:px-6 py-16 md:py-8">
      <div className="relative max-w-4xl w-full">
        {/* Avatar + greeting */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-800 ring-offset-2 ring-offset-[#fafafa] dark:ring-offset-[#0a0a0a] mb-4 md:mb-5 shadow-lg">
            <Image src={profile.avatar} alt={profile.name} width={64} height={64} className="object-cover w-full h-full" priority />
          </div>
          <p className="text-sm text-neutral-400 dark:text-neutral-600 mb-2 tracking-wide">
            {profile.name}&apos;s Portfolio
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
            How should I introduce myself?
          </h1>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm md:text-base max-w-md text-center">
            Pick your vibe and I&apos;ll tailor the experience.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelect(role.id)}
              className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-neutral-900/50 cursor-pointer"
            >
              {/* Accent top bar on hover */}
              <div
                className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: role.accent }}
              />

              <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                {role.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white mb-1">
                {role.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-neutral-400 dark:text-neutral-500">
                {role.subtitle}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-1 group-hover:translate-x-0 text-neutral-400 dark:text-neutral-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
