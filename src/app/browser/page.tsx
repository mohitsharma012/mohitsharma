"use client";

import { useRouter } from "next/navigation";
import InstagramLayout from "@/components/layouts/InstagramLayout";

export default function BrowserPage() {
  const router = useRouter();
  return <InstagramLayout onReset={() => router.push("/")} />;
}
