"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, about, projects } from "@/data/site";

export default function MinimalistLayout({ onReset }: { onReset: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-12 md:mb-20">
          <button
            onClick={onReset}
            className="text-xs text-[#999] dark:text-[#555] hover:text-[#1a1a1a] dark:hover:text-white transition-colors tracking-wide"
          >
            &larr; back
          </button>
          <ThemeToggle />
        </div>

        {/* Hero */}
        <header className="mb-12 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
              <Image src={profile.avatar} alt={profile.name} width={80} height={80} className="object-cover w-full h-full" priority />
            </div>
            <div className="pb-0.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-none mb-1">{profile.name}</h1>
              {profile.location && <p className="text-sm text-[#888] dark:text-[#666]">{profile.location}</p>}
            </div>
          </div>
          <p className="text-base leading-relaxed text-[#555] dark:text-[#999] max-w-2xl">
            {profile.bio}
          </p>

          {/* Quick links row */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
            <button onClick={copyEmail} className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] hover:opacity-80 transition-all cursor-pointer">
              {copied ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>
                  Email copied!
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"/></svg>
                  Say hello
                </>
              )}
            </button>
            <a href={profile.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#555] dark:text-[#999] hover:border-[#bbb] dark:hover:border-[#444] transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#555] dark:text-[#999] hover:border-[#bbb] dark:hover:border-[#444] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              LinkedIn
            </a>
            {profile.instagram && (
            <a href={profile.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#555] dark:text-[#999] hover:border-[#bbb] dark:hover:border-[#444] transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
              Instagram
            </a>
            )}
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#bbb] dark:text-[#444] mb-5">About</h2>
          <div className="space-y-4">
            {about.paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.7] text-[#444] dark:text-[#aaa]"
                dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#1a1a1a] dark:text-[#e5e5e5] font-semibold'>$1</strong>") }}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#bbb] dark:text-[#444] mb-5">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group block p-5 rounded-xl border border-[#eaeaea] dark:border-[#1e1e1e] hover:border-[#ccc] dark:hover:border-[#333] bg-white dark:bg-[#111] transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold group-hover:text-black dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#888] dark:text-[#666]">
                    {project.language}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#888] dark:text-[#666]">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-[11px] text-[#bbb] dark:text-[#444]">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
                  {project.stars}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#bbb] dark:text-[#444] mb-5">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {about.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#f0f0f0] dark:bg-[#161616] text-[#555] dark:text-[#888] border border-transparent hover:border-[#ddd] dark:hover:border-[#2a2a2a] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#bbb] dark:text-[#444] mb-5">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 py-1.5 text-[#555] dark:text-[#999] hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 opacity-40"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"/></svg>
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noopener" className="flex items-center gap-2 py-1.5 text-[#555] dark:text-[#999] hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 opacity-40"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>
              github.com/{profile.username}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="flex items-center gap-2 py-1.5 text-[#555] dark:text-[#999] hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-40"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              linkedin.com/in/{profile.username}
            </a>
            {profile.instagram && (
            <a href={profile.instagram} target="_blank" rel="noopener" className="flex items-center gap-2 py-1.5 text-[#555] dark:text-[#999] hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 opacity-40"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
              @_.mohit_012
            </a>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#eee] dark:border-[#1a1a1a]">
          <p className="text-[11px] text-[#ccc] dark:text-[#333]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
