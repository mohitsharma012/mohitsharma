"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/site";

export type Role = "recruiter" | "developer" | "browser" | "nerd";

const roles = [
  {
    id: "recruiter" as Role,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Founder / Recruiter",
    subtitle: "Professional profile, LinkedIn style",
    accent: "#0a66c2",
    glow: "rgba(10, 102, 194, 0.15)",
    key: "1",
  },
  {
    id: "developer" as Role,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Developer",
    subtitle: "Repos, code & contributions",
    accent: "#6e40c9",
    glow: "rgba(110, 64, 201, 0.15)",
    key: "2",
  },
  {
    id: "browser" as Role,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Just Browsing",
    subtitle: "Visual feed of my work",
    accent: "#c13584",
    glow: "rgba(193, 53, 132, 0.15)",
    key: "3",
  },
  {
    id: "nerd" as Role,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
      </svg>
    ),
    title: "Nerd",
    subtitle: "Clean, minimal, no fluff",
    accent: "#18181b",
    glow: "rgba(24, 24, 27, 0.12)",
    key: "4",
  },
];

export default function RoleChooser({
  onSelect,
}: {
  onSelect: (role: Role) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<Role | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const r = roles.find((r) => r.key === e.key);
      if (r) onSelect(r.id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSelect]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fafafa] dark:bg-[#060606] transition-colors duration-500">
      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-[120px] transition-all duration-1000"
          style={{ background: hoveredId ? roles.find((r) => r.id === hoveredId)?.accent : "#6e40c9" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.03] dark:opacity-[0.05] blur-[100px] transition-all duration-1000"
          style={{ background: hoveredId ? roles.find((r) => r.id === hoveredId)?.accent : "#0a66c2" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="fixed inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-10">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm text-neutral-500 dark:text-neutral-400 shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="min-h-full flex items-center justify-center px-4 md:px-6 py-16 md:py-8">
        <div className="relative max-w-[900px] w-full">
          {/* Avatar + greeting */}
          <div
            className="flex flex-col items-center mb-10 md:mb-14 transition-all duration-700"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
          >
            <div className="relative mb-5 md:mb-6">
              <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-neutral-200/80 dark:ring-neutral-700/60 ring-offset-[3px] ring-offset-[#fafafa] dark:ring-offset-[#060606] shadow-xl">
                <Image src={profile.avatar} alt={profile.name} width={80} height={80} className="object-cover w-full h-full" priority />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-[2.5px] border-[#fafafa] dark:border-[#060606]" />
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-3 font-medium">
              {profile.name}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-neutral-900 dark:text-white mb-3 tracking-tight text-center leading-tight">
              Who&apos;s visiting today?
            </h1>
            <p className="text-neutral-400 dark:text-neutral-500 text-sm md:text-[15px] max-w-sm text-center leading-relaxed">
              Choose your role and I&apos;ll customize the experience for you.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {roles.map((role, i) => (
              <button
                key={role.id}
                onClick={() => onSelect(role.id)}
                onMouseEnter={() => setHoveredId(role.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-white/3 backdrop-blur-sm p-5 md:p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer overflow-hidden"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ${150 + i * 80}ms, transform 0.5s ${150 + i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${role.glow}, transparent 70%)` }}
                />

                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${role.accent}, transparent)` }}
                />

                <div className="relative">
                  <div
                    className="mb-4 w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:scale-110 transition-all duration-300"
                    style={{ background: hoveredId === role.id ? role.glow : undefined }}
                  >
                    <span className="transition-colors duration-300 group-hover:text-neutral-800 dark:group-hover:text-white" style={hoveredId === role.id ? { color: role.accent } : undefined}>
                      {role.icon}
                    </span>
                  </div>
                  <h3 className="text-[14px] md:text-[15px] font-semibold text-neutral-900 dark:text-white mb-1 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] leading-relaxed text-neutral-400 dark:text-neutral-500">
                    {role.subtitle}
                  </p>

                  {/* Arrow + key hint */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="text-[10px] font-mono text-neutral-300 dark:text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Press {role.key}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-70 transition-all duration-300 translate-x-1 group-hover:translate-x-0 text-neutral-400 dark:text-neutral-500">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3l5 5-5 5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
