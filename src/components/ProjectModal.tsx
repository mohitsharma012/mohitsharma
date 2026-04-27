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
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-stretch md:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Desktop-only side nav arrows */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous project"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-50 w-14 h-28 items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <div
        className="relative w-full h-dvh md:w-[85vw] md:h-[96vh] md:rounded-lg bg-white dark:bg-[#1a1a1a] border-0 md:border border-[#e0e0e0] dark:border-[#333] md:shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex items-center justify-between gap-3 px-4 md:px-8 py-3 md:py-7 shrink-0 border-b border-[#eaeaea] dark:border-[#262626] md:border-b-0">
          <h2 className="text-lg md:text-4xl font-semibold text-[#111] dark:text-[#f0f0f0] truncate">
            {project.title}
          </h2>

          <div className="flex items-center gap-1 shrink-0">
            {/* Mobile-only inline prev/next */}
            {onPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous project"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] text-[#666] dark:text-[#999] transition-colors cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            {onNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next project"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] text-[#666] dark:text-[#999] transition-colors cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] text-[#666] dark:text-[#999] transition-colors cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Content: single scroll on mobile, two independent columns on md+ */}
        <div className="flex-1 min-h-0 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row md:px-8">
          {/* Left — Details */}
          <div className="md:w-96 md:shrink-0 md:pr-7 md:pt-9 md:overflow-y-auto px-4 pt-5 pb-6 md:pb-9">
            <p className="text-sm md:text-base mb-3 md:mb-5">
              Project description.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#333] dark:text-[#ccc] mb-5 md:mb-6">
              {project.longDescription}
            </p>

            <p className="text-sm md:text-base font-medium text-[#666] dark:text-[#999] mb-3">
              Skills and deliverables
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techUsed.map((t) => (
                <span
                  key={t}
                  className="text-xs md:text-sm font-semibold px-2.5 md:px-3 py-1 rounded-full bg-[#f0f0f0] dark:bg-[#252525] text-[#444] dark:text-[#bbb]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Screenshots */}
          <div className="md:flex-1 md:overflow-y-auto px-4 md:px-0 pb-8 md:pb-0">
            <div className="space-y-3 md:space-y-4 md:pb-18">
              {project.screenshots.map((shot, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-md md:rounded-none"
                >
                  <Image
                    src={shot.image}
                    alt={shot.label}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next project"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-50 w-14 h-28 items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
