import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE_URL, profile, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects — Mohit Sharma",
  description:
    "AI engineering and full-stack projects by Mohit Sharma — production-grade LLM applications, developer tools, and shipped products.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Projects — Mohit Sharma",
    description:
      "AI engineering and full-stack projects by Mohit Sharma — production-grade LLM applications, developer tools, and shipped products.",
    type: "website",
    url: `${SITE_URL}/projects`,
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects — Mohit Sharma",
  description:
    "AI engineering and full-stack projects by Mohit Sharma.",
  url: `${SITE_URL}/projects`,
  author: { "@type": "Person", name: profile.name, url: SITE_URL },
  hasPart: projects.map((p) => ({
    "@type": "SoftwareApplication",
    name: p.title,
    description: p.description,
    url: `${SITE_URL}/projects/${p.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
  ],
};

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white/80 dark:bg-[#111]/80 backdrop-blur-sm text-[#555] dark:text-[#999] shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#888] dark:text-[#666] mb-10">
          <Link href="/" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-[#ccc] dark:text-[#444]">/</span>
          <span aria-current="page" className="text-[#1a1a1a] dark:text-[#e5e5e5]">
            Projects
          </span>
        </nav>

        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-base leading-relaxed text-[#555] dark:text-[#999] max-w-xl">
            AI engineering and full-stack work. Each project page has the long
            write-up, features, tech stack, and screenshots.
          </p>
        </header>

        {/* Project grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block p-5 rounded-xl border border-[#eaeaea] dark:border-[#1e1e1e] hover:border-[#ccc] dark:hover:border-[#333] bg-white dark:bg-[#111] transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-semibold group-hover:text-black dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#888] dark:text-[#666]">
                    {project.language}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#888] dark:text-[#666]">
                  {project.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-[#eee] dark:border-[#1a1a1a]">
          <p className="text-[11px] text-[#bbb] dark:text-[#555]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
