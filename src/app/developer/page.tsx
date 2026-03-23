"use client";

import { useRouter } from "next/navigation";
import GitHubLayout from "@/components/layouts/GitHubLayout";

export default function DeveloperPage() {
  const router = useRouter();
  return <GitHubLayout onReset={() => router.push("/")} />;
}
