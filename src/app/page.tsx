"use client";

import { useRouter } from "next/navigation";
import RoleChooser, { type Role } from "@/components/RoleChooser";

export default function Home() {
  const router = useRouter();

  const handleSelect = (role: Role) => {
    router.push(`/${role}`);
  };

  return <RoleChooser onSelect={handleSelect} />;
}
