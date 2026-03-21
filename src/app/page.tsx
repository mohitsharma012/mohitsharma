"use client";

import { useSyncExternalStore, useCallback } from "react";
import RoleChooser, { type Role } from "@/components/RoleChooser";
import GitHubLayout from "@/components/layouts/GitHubLayout";
import LinkedInLayout from "@/components/layouts/LinkedInLayout";
import InstagramLayout from "@/components/layouts/InstagramLayout";
import MinimalistLayout from "@/components/layouts/MinimalistLayout";

function getRole(): Role | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("portfolio-role") as Role | null;
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

export default function Home() {
  const role = useSyncExternalStore(subscribe, getRole, () => null);

  const handleSelect = useCallback((selected: Role) => {
    localStorage.setItem("portfolio-role", selected);
    window.dispatchEvent(new StorageEvent("storage"));
  }, []);

  const handleReset = useCallback(() => {
    localStorage.removeItem("portfolio-role");
    window.dispatchEvent(new StorageEvent("storage"));
  }, []);

  if (role === null) {
    return <RoleChooser onSelect={handleSelect} />;
  }

  switch (role) {
    case "recruiter":
      return <LinkedInLayout onReset={handleReset} />;
    case "developer":
      return <GitHubLayout onReset={handleReset} />;
    case "browser":
      return <InstagramLayout onReset={handleReset} />;
    case "nerd":
      return <MinimalistLayout onReset={handleReset} />;
  }
}
