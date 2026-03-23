"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import { profile, about, projects } from "@/data/site";

const skillIcons: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  LangChain: "https://cdn.simpleicons.org/langchain",
  LangGraph: "https://cdn.simpleicons.org/langchain",
  spaCy: "https://cdn.simpleicons.org/spacy",
  FastAPI: "https://cdn.simpleicons.org/fastapi",
  Django: "https://cdn.simpleicons.org/django",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  Redis: "https://cdn.simpleicons.org/redis",
  Docker: "https://cdn.simpleicons.org/docker",
  AWS: "https://cdn.simpleicons.org/amazonaws",
  Vercel: "https://cdn.simpleicons.org/vercel",
};

const stats = [
  { label: "posts", value: projects.length },
  { label: "followers", value: "1.2K" },
  { label: "following", value: 284 },
];

export default function InstagramLayout({ onReset }: { onReset: () => void }) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selectedProject = selectedIdx !== null ? projects[selectedIdx] : null;

  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIdx]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-[#262626] dark:text-[#f5f5f5] transition-colors duration-200" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontSize: "14px" }}>
      {selectedProject && selectedIdx !== null && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedIdx(null)}
          onPrev={selectedIdx > 0 ? () => setSelectedIdx(selectedIdx - 1) : null}
          onNext={selectedIdx < projects.length - 1 ? () => setSelectedIdx(selectedIdx + 1) : null}
        />
      )}
      {/* Instagram Nav */}
      <header className="sticky top-0 z-40 bg-white dark:bg-black border-b border-[#dbdbdb] dark:border-[#363636]">
        <div className="max-w-[935px] mx-auto px-4 h-[60px] flex items-center justify-between">
          <span className="text-xl" style={{ fontFamily: "cursive", fontWeight: 600 }}>
            mohitcodes
          </span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <ThemeToggle />
            </div>
            <button onClick={onReset} className="text-xs px-3 py-1.5 rounded-lg font-semibold bg-[#efefef] dark:bg-[#363636] transition-colors">
              Switch view
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[935px] mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-8">
          <div className="shrink-0">
            <div className="w-20 h-20 md:w-[150px] md:h-[150px] rounded-full p-[2px] md:p-[3px]" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
              <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-[3px] border-white dark:border-black">
                <Image src={profile.avatar} alt={profile.name} width={150} height={150} className="object-cover w-full h-full" priority />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
              <h1 className="text-xl font-normal">{profile.username}</h1>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <a href={`mailto:${profile.email}`} className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white bg-[#0095f6]">
                  Message
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-[#efefef] dark:bg-[#363636] transition-colors">
                  Following
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 md:gap-8 justify-center md:justify-start mb-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="font-semibold">{stat.value}</span>{" "}
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold text-sm">{profile.name}</p>
              <p className="text-sm text-[#8e8e8e] dark:text-[#a8a8a8]">AI Engineer & Developer</p>
              <p className="text-sm mt-1">{profile.bio}</p>
              <p className="text-sm mt-1">
                <a href={profile.github} target="_blank" rel="noopener" className="font-semibold text-[#00376b] dark:text-[#e0f1ff]">
                  {profile.github}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 mb-4 scrollbar-hide border-b border-[#dbdbdb] dark:border-[#363636] px-1">
          {about.techStack.slice(0, 8).map((tech) => (
            <div key={tech} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-14 h-14 md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center border border-[#dbdbdb] dark:border-[#363636] bg-[#fafafa] dark:bg-[#121212] p-2.5 md:p-3.5">
                {skillIcons[tech] ? (
                  <Image
                    src={skillIcons[tech]}
                    alt={tech}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain dark:invert-0"
                    unoptimized
                  />
                ) : (
                  <span className="text-[8px] md:text-[10px] font-semibold text-center leading-tight">
                    {tech}
                  </span>
                )}
              </div>
              <span className="text-[10px] md:text-xs truncate w-14 md:w-[77px] text-center">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-12 mb-1 border-b border-[#dbdbdb] dark:border-[#363636]">
          <button className="flex items-center gap-1 py-3 text-xs font-semibold tracking-wider uppercase border-t border-current">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>
            Posts
          </button>
          <button className="flex items-center gap-1 py-3 text-xs tracking-wider uppercase text-[#8e8e8e] dark:text-[#a8a8a8]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5z"/></svg>
            About
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 gap-1 mb-8">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedIdx(projects.indexOf(project))}
              className="group relative aspect-video overflow-hidden bg-[#f0f0f0] dark:bg-[#1a1a1a] cursor-pointer"
            >
              <Image
                src={project.screenshots[0].image}
                alt={project.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 p-2">
                <span className="flex items-center gap-1 text-white text-sm font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  {project.stars}
                </span>
                <span className="text-white text-[10px] md:text-xs font-semibold text-center line-clamp-1">{project.title}</span>
              </div>
            </button>
          ))}

        </div>
      </div>

      {/* Bottom nav */}
      <nav className="sticky bottom-0 z-40 flex items-center justify-around py-2 bg-white dark:bg-black border-t border-[#dbdbdb] dark:border-[#363636]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <div className="w-6 h-6 rounded-full overflow-hidden border border-current">
          <Image src={profile.avatar} alt={profile.name} width={24} height={24} className="object-cover w-full h-full" />
        </div>
      </nav>
    </div>
  );
}
