"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "terminal";

const THEME_BG: Record<Theme, string> = {
  light: "#fafafa",
  dark: "#0a0a0a",
  terminal: "#000000",
};

function readCurrentTheme(): Theme {
  const html = document.documentElement;
  if (html.classList.contains("terminal")) return "terminal";
  if (html.classList.contains("dark")) return "dark";
  return "light";
}

function applyClasses(next: Theme) {
  const html = document.documentElement;
  html.classList.remove("dark", "terminal");
  if (next === "terminal") html.classList.add("dark", "terminal");
  else if (next === "dark") html.classList.add("dark");
}

function syncMetaThemeColor(next: Theme) {
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => {
      meta.removeAttribute("media");
      meta.content = THEME_BG[next];
    });
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setTheme(readCurrentTheme());
  }, []);

  useEffect(() => {
    if (!open) return;

    function onClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);

    // Move focus into the menu for keyboard users.
    menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function selectTheme(next: Theme) {
    const html = document.documentElement;
    html.classList.add("theme-switching");
    applyClasses(next);
    setTheme(next);

    try {
      localStorage.setItem("theme", next);
    } catch {}

    syncMetaThemeColor(next);

    window.setTimeout(() => {
      html.classList.remove("theme-switching");
    }, 280);

    setOpen(false);
  }

  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-8 h-8 flex items-center justify-center rounded-md text-current opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <ThemeIcon theme={theme} />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Theme"
          className="absolute right-0 top-full mt-3 w-40 rounded-lg border border-[#e5e5e5] dark:border-[#2a2a2a] bg-white dark:bg-[#111] shadow-lg overflow-hidden text-[13px] z-50"
        >
          <ThemeOption
            label="Light"
            value="light"
            active={theme === "light"}
            onSelect={selectTheme}
          />
          <ThemeOption
            label="Dark"
            value="dark"
            active={theme === "dark"}
            onSelect={selectTheme}
          />
          <ThemeOption
            label="Terminal"
            value="terminal"
            active={theme === "terminal"}
            onSelect={selectTheme}
          />
        </div>
      )}
    </div>
  );
}

function ThemeOption({
  label,
  value,
  active,
  onSelect,
}: {
  label: string;
  value: Theme;
  active: boolean;
  onSelect: (t: Theme) => void;
}) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={() => onSelect(value)}
      className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left transition-colors hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a] cursor-pointer ${
        active
          ? "text-[#1a1a1a] dark:text-[#e5e5e5] font-medium"
          : "text-[#555] dark:text-[#999]"
      }`}
    >
      <span className="flex items-center gap-2.5">
        <span className="w-4 h-4 inline-flex items-center justify-center">
          <ThemeIcon theme={value} />
        </span>
        {label}
      </span>
      {active && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
        </svg>
      )}
    </button>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "terminal") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" />
        <path d="M4 6l2 2-2 2" />
        <path d="M8 10h4" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z" />
      </svg>
    );
  }

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm9.193 9.193a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM0 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm13 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 13 8ZM2.343 13.657a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0Zm9.193-9.193a.75.75 0 0 1 0-1.06l1.061-1.061a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0Z" />
    </svg>
  );
}
