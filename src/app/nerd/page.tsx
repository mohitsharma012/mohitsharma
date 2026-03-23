"use client";

import { useRouter } from "next/navigation";
import MinimalistLayout from "@/components/layouts/MinimalistLayout";

export default function NerdPage() {
  const router = useRouter();
  return <MinimalistLayout onReset={() => router.push("/")} />;
}
