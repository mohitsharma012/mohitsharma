"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import { profile, about, projects } from "@/data/site";

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative w-full max-w-md rounded-lg bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#e0dfdc] dark:border-[#383c41]">
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f3f2ef] dark:hover:bg-[#2d3239] transition-colors text-[#666] dark:text-[#a1a1aa]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#666] dark:text-[#a1a1aa] shrink-0 mt-0.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa]">Email</p>
              <a href={`mailto:${profile.email}`} className="text-sm font-medium text-[#0a66c2] dark:text-[#70b5f9] hover:underline">{profile.email}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#666] dark:text-[#a1a1aa] shrink-0 mt-0.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa]">LinkedIn</p>
              <a href={profile.linkedin} target="_blank" rel="noopener" className="text-sm font-medium text-[#0a66c2] dark:text-[#70b5f9] hover:underline">linkedin.com/in/{profile.username}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-[#666] dark:text-[#a1a1aa] shrink-0 mt-0.5"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>
            <div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa]">GitHub</p>
              <a href={profile.github} target="_blank" rel="noopener" className="text-sm font-medium text-[#0a66c2] dark:text-[#70b5f9] hover:underline">github.com/{profile.username}</a>
            </div>
          </div>
          {profile.instagram && (
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-[#666] dark:text-[#a1a1aa] shrink-0 mt-0.5"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
            <div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa]">Instagram</p>
              <a href={profile.instagram} target="_blank" rel="noopener" className="text-sm font-medium text-[#0a66c2] dark:text-[#70b5f9] hover:underline">@_.mohit_012</a>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LinkedInLayout({ onReset }: { onReset: () => void }) {
  const [showContact, setShowContact] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selectedProject = selectedIdx !== null ? projects[selectedIdx] : null;

  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIdx]);

  return (
    <div className="min-h-screen bg-[#f4f2ee] dark:bg-[#1b1f23] text-[#191919] dark:text-[#e6edf3] transition-colors duration-200" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontSize: "14px" }}>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {selectedProject && selectedIdx !== null && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedIdx(null)}
          onPrev={selectedIdx > 0 ? () => setSelectedIdx(selectedIdx - 1) : null}
          onNext={selectedIdx < projects.length - 1 ? () => setSelectedIdx(selectedIdx + 1) : null}
        />
      )}

      {/* LinkedIn Nav */}
      <header className="sticky top-0 z-40 shadow-sm bg-white dark:bg-[#1e2328] border-b border-[#e0dfdc] dark:border-[#383c41]">
        <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href={profile.linkedin} target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="#0a66c2">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <div className="hidden md:flex items-center gap-1 ml-2 px-3 py-1.5 rounded bg-[#edf3f8] dark:bg-[#2d3239]">
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#666] dark:text-[#a1a1aa]" fill="currentColor"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="m11 11 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span className="text-xs text-[#666] dark:text-[#a1a1aa]">Search</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-[#666] dark:text-[#a1a1aa]">
              <ThemeToggle />
            </div>
            <button onClick={onReset} className="text-xs px-3 py-1.5 rounded-full border border-[#ccc] dark:border-[#555] text-[#666] dark:text-[#a1a1aa] transition-colors">
              Switch view
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Profile Card */}
        <div className="rounded-lg overflow-hidden shadow-sm mb-2 bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41]">
          <div className="relative overflow-hidden h-[150px] md:h-[280px]">
            <Image src="/linkedin-banner.png" alt="Banner" fill className="object-cover object-center" priority />
          </div>

          <div className="px-4 md:px-6 pb-6 relative">
            <div className="w-24 h-24 md:w-[152px] md:h-[152px] rounded-full overflow-hidden border-4 border-white dark:border-[#1e2328] -mt-12 md:-mt-[80px] relative">
              <Image src={profile.avatar} alt={profile.name} width={152} height={152} className="object-cover w-full h-full" priority />
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">{profile.name}</h1>
                <p className="text-sm md:text-base mt-0.5">{profile.bio}</p>
                <p className="text-sm mt-1 text-[#666] dark:text-[#a1a1aa]">
                  <button onClick={() => setShowContact(true)} className="font-semibold text-[#0a66c2] dark:text-[#70b5f9] hover:underline cursor-pointer">Contact info</button>
                </p>
                {profile.organization && <p className="text-sm mt-1 text-[#666] dark:text-[#a1a1aa]">{profile.organization}</p>}

                <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#dce6f1] dark:bg-[#1e3a5f] text-[#0a66c2] dark:text-[#70b5f9]">
                  <span className="w-2 h-2 rounded-full bg-[#057642]" />
                  Open to work
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <a href={profile.linkedin} target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-[#0a66c2]">
                  Connect
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full text-sm font-semibold border border-[#0a66c2] text-[#0a66c2] dark:text-[#70b5f9] dark:border-[#70b5f9]">
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2 space-y-2">
            <section className="rounded-lg p-6 shadow-sm bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41]">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              {about.paragraphs.map((text, i) => (
                <p key={i} className="text-sm leading-relaxed mb-2"
                  dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                />
              ))}
            </section>

            <section className="rounded-lg p-6 shadow-sm bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41]">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects.map((project) => (
                  <button key={project.title} onClick={() => setSelectedIdx(projects.indexOf(project))} className="block p-4 rounded-lg bg-[#f3f2ef] dark:bg-[#2d3239] transition-colors text-left hover:bg-[#eae8e4] dark:hover:bg-[#353b43] cursor-pointer w-full">
                    <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                    <p className="text-xs leading-relaxed text-[#666] dark:text-[#a1a1aa]">{project.description}</p>
                    <p className="text-xs mt-2 font-medium text-[#0a66c2] dark:text-[#70b5f9]">{project.language}</p>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-2">
            <section className="rounded-lg p-6 shadow-sm bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41]">
              <h2 className="text-base font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {about.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full font-medium bg-[#e8e8e8] dark:bg-[#383c41]">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-lg p-6 shadow-sm bg-white dark:bg-[#1e2328] border border-[#e0dfdc] dark:border-[#383c41]">
              <h2 className="text-base font-semibold mb-3">Contact</h2>
              <ul className="space-y-2 text-sm">
                <li><a href={`mailto:${profile.email}`} className="hover:underline text-[#0a66c2] dark:text-[#70b5f9]">{profile.email}</a></li>
                <li><a href={profile.github} target="_blank" rel="noopener" className="hover:underline text-[#0a66c2] dark:text-[#70b5f9]">GitHub</a></li>
                {profile.instagram && <li><a href={profile.instagram} target="_blank" rel="noopener" className="hover:underline text-[#0a66c2] dark:text-[#70b5f9]">Instagram</a></li>}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
