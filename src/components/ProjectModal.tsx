"use client";

import Image from "next/image";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />

      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 md:w-14 h-24 md:h-28 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}

      <div
        className="relative w-[85vw] h-[96vh] rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-7 shrink-0">
          <h2 className="text-4xl font-semibold text-[#111] dark:text-[#f0f0f0] truncate pr-4">
            {project.title} 
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] text-[#666] dark:text-[#999] transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row px-8" style={{ height: "calc(100% - 57px)" }}>
          {/* Left — Details */}
          <div className="md:w-sm pr-7 mt-9 shrink-0 overflow-y-auto border-b ">
            <p className="text-base mb-5">Project description.</p>
            <p className="text-base leading-relaxed text-[#333] dark:text-[#ccc] mb-6">{project.longDescription}</p>

            <p className="text-base font-medium text-[#666] dark:text-[#999] mb-3">Skills and deliverables</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techUsed.map((t) => (
                <span key={t} className="text-sm font-semibold px-3 py-1 rounded-full bg-[#f0f0f0] dark:bg-[#252525] text-[#444] dark:text-[#bbb]">{t}</span>
              ))}
            </div>

          </div>

          {/* Right — Scrollable images */}
          <div className="overflow-y-auto ">
            <div className="space-y-4 pb-18">
              {project.screenshots.map((shot, i) => (
                <div key={i} className="overflow-hidden scroll-smooth">
                  <Image
                    src={shot.image}
                    alt={shot.label}
                    width={1200}
                    height={800}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 md:w-14 h-24 md:h-28 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}
    </div>
  );
}
