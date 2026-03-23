import type { Metadata } from "next";
import LayoutPage from "@/components/LayoutPage";

export const metadata: Metadata = {
  title: "Mohit Sharma — Professional Profile | AI Engineer & Full-Stack Developer",
  description:
    "View Mohit Sharma's professional profile. AI Engineer with 2+ years building production-grade LLM applications, NLP pipelines, and scalable full-stack products.",
  openGraph: {
    title: "Mohit Sharma — Professional Profile",
    description:
      "AI Engineer with 2+ years building production-grade LLM applications, NLP pipelines, and scalable full-stack products.",
    type: "profile",
    url: "https://mohitsharma.co/recruiter",
    images: [{ url: "/mohit-sharma.png", width: 400, height: 400, alt: "Mohit Sharma" }],
  },
  twitter: {
    card: "summary",
    title: "Mohit Sharma — Professional Profile",
    description:
      "AI Engineer building production-grade LLM applications and full-stack products.",
    images: ["/mohit-sharma.png"],
  },
  alternates: {
    canonical: "https://mohitsharma.co/recruiter",
  },
};

export default function RecruiterPage() {
  return <LayoutPage type="recruiter" />;
}
