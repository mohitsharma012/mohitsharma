import type { Metadata } from "next";
import LayoutPage from "@/components/LayoutPage";

export const metadata: Metadata = {
  title: "Mohit Sharma — Visual Portfolio | Projects & Work",
  description:
    "Browse Mohit Sharma's visual portfolio — a curated gallery of AI-powered tools, web applications, and full-stack projects.",
  openGraph: {
    title: "Mohit Sharma — Visual Portfolio",
    description:
      "A curated gallery of AI-powered tools, web applications, and full-stack projects.",
    type: "website",
    url: "https://mohitsharma.co/browser",
    images: [{ url: "/mohit-sharma.png", width: 400, height: 400, alt: "Mohit Sharma" }],
  },
  twitter: {
    card: "summary",
    title: "Mohit Sharma — Visual Portfolio",
    description:
      "A curated gallery of AI-powered tools, web applications, and full-stack projects.",
    images: ["/mohit-sharma.png"],
  },
  alternates: {
    canonical: "https://mohitsharma.co/browser",
  },
};

export default function BrowserPage() {
  return <LayoutPage type="browser" />;
}
