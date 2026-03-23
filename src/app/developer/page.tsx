import type { Metadata } from "next";
import LayoutPage from "@/components/LayoutPage";

export const metadata: Metadata = {
  title: "Mohit Sharma — Developer Portfolio | Repositories & Projects",
  description:
    "Explore Mohit Sharma's developer portfolio — open-source projects, repositories, and code contributions in AI, TypeScript, React, Next.js, and Python.",
  openGraph: {
    title: "Mohit Sharma — Developer Portfolio",
    description:
      "Open-source projects and code contributions in AI, TypeScript, React, Next.js, and Python.",
    type: "website",
    url: "https://mohitsharma.co/developer",
    images: [{ url: "/mohit-sharma.png", width: 400, height: 400, alt: "Mohit Sharma" }],
  },
  twitter: {
    card: "summary",
    title: "Mohit Sharma — Developer Portfolio",
    description:
      "Open-source projects and code contributions in AI, TypeScript, React, and Python.",
    images: ["/mohit-sharma.png"],
  },
  alternates: {
    canonical: "https://mohitsharma.co/developer",
  },
};

export default function DeveloperPage() {
  return <LayoutPage type="developer" />;
}
