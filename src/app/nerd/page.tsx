import type { Metadata } from "next";
import LayoutPage from "@/components/LayoutPage";

export const metadata: Metadata = {
  title: "Mohit Sharma — Minimalist Portfolio | AI Engineer & Developer",
  description:
    "Mohit Sharma's clean, minimalist portfolio — AI Engineer & Full-Stack Developer. Projects, tech stack, and contact info with no fluff.",
  openGraph: {
    title: "Mohit Sharma — Minimalist Portfolio",
    description:
      "Clean, minimalist portfolio of an AI Engineer & Full-Stack Developer. Projects, tech stack, and contact.",
    type: "website",
    url: "https://mohitsharma.co/nerd",
    images: [{ url: "/mohit-sharma.png", width: 400, height: 400, alt: "Mohit Sharma" }],
  },
  twitter: {
    card: "summary",
    title: "Mohit Sharma — Minimalist Portfolio",
    description:
      "Clean, minimalist portfolio — projects, tech stack, and contact with no fluff.",
    images: ["/mohit-sharma.png"],
  },
  alternates: {
    canonical: "https://mohitsharma.co/nerd",
  },
};

export default function NerdPage() {
  return <LayoutPage type="nerd" />;
}
