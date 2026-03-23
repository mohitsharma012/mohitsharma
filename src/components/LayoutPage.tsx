"use client";

import { useRouter } from "next/navigation";
import GitHubLayout from "@/components/layouts/GitHubLayout";
import LinkedInLayout from "@/components/layouts/LinkedInLayout";
import InstagramLayout from "@/components/layouts/InstagramLayout";
import MinimalistLayout from "@/components/layouts/MinimalistLayout";

const layouts = {
  recruiter: LinkedInLayout,
  developer: GitHubLayout,
  browser: InstagramLayout,
  nerd: MinimalistLayout,
};

export default function LayoutPage({ type }: { type: keyof typeof layouts }) {
  const router = useRouter();
  const Layout = layouts[type];
  return <Layout onReset={() => router.push("/")} />;
}
