"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import { tabs, profile, projects } from "@/data/site";

function RepoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function RepositoriesView({ onSelectProject }: { onSelectProject: (idx: number) => void }) {
  const [search, setSearch] = useState("");
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Find a repository…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-3 py-[5px] text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
        />
      </div>

      <div className="divide-y divide-border border-t border-border">
        {filtered.map((project) => (
          <div key={project.title} className="py-4 md:py-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <button onClick={() => onSelectProject(projects.indexOf(project))} className="text-base md:text-xl font-semibold text-accent hover:underline break-all text-left cursor-pointer">
                    {project.title}
                  </button>
                  <span className="text-xs border border-border text-muted rounded-full px-1.5 py-0 shrink-0">
                    Public
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted mb-3 max-w-2xl">{project.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: project.langColor }} />
                    {project.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <StarIcon />
                    {project.stars}
                  </span>
                </div>
              </div>
              <button className="shrink-0 hidden sm:flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md border border-border bg-surface hover:bg-surface-hover text-foreground transition-colors">
                <StarIcon />
                Star
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-10 text-center text-sm text-muted">
            No repositories match &ldquo;{search}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}

export default function GitHubLayout({ onReset }: { onReset: () => void }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selectedProject = selectedIdx !== null ? projects[selectedIdx] : null;

  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIdx]);

  return (
    <div className="theme-github">
      {selectedProject && selectedIdx !== null && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedIdx(null)}
          onPrev={selectedIdx > 0 ? () => setSelectedIdx(selectedIdx - 1) : null}
          onNext={selectedIdx < projects.length - 1 ? () => setSelectedIdx(selectedIdx + 1) : null}
        />
      )}
      <header className="bg-header text-white px-4 h-16 flex items-center">
        <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg height="32" viewBox="0 0 16 16" width="32" fill="white">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            <span className="text-sm font-semibold opacity-80">{profile.username}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onReset}
              className="text-xs text-white/50 hover:text-white transition-colors px-2 py-1 rounded"
              aria-label="Switch view"
            >
              Switch view
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-background border-b border-border px-4">
        <div className="max-w-[1280px] mx-auto flex items-center gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.name
                  ? "border-[#fd8c73] font-semibold text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {tab.name === "Repositories" && <RepoIcon />}
              {tab.name}
              {tab.count !== undefined && (
                <span className="text-xs bg-surface-hover text-muted px-1.5 py-0.5 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-[1280px] mx-auto px-4 py-6 flex flex-col md:flex-row gap-8">
        <aside className="md:w-[296px] shrink-0">
          <Hero />
        </aside>
        <main className="flex-1 min-w-0">
          {activeTab === "Overview" && <About />}
          {activeTab === "Repositories" && <RepositoriesView onSelectProject={setSelectedIdx} />}
          {activeTab !== "Overview" && activeTab !== "Repositories" && (
            <div className="py-10 text-center text-sm text-muted">
              Nothing to see here yet.
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
