"use client";

import { useRouter } from "next/navigation";
import LinkedInLayout from "@/components/layouts/LinkedInLayout";

export default function RecruiterPage() {
  const router = useRouter();
  return <LinkedInLayout onReset={() => router.push("/")} />;
}
