import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  SITE_URL,
  profile,
  projects,
  getProject,
  type Project,
} from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${slug}`;
  const ogImage = project.screenshots[0]?.image
    ? `${SITE_URL}${project.screenshots[0].image}`
    : `${SITE_URL}${profile.avatar}`;

  return {
    title: project.title,
    description: project.description,
    authors: [{ name: profile.name, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      type: "article",
      url,
      images: [{ url: ogImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      images: [ogImage],
    },
  };
}

function buildSoftwareSchema(project: Project) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.longDescription || project.description,
    url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: { "@type": "Person", name: profile.name, url: SITE_URL },
    creator: { "@type": "Person", name: profile.name, url: SITE_URL },
    image: project.screenshots
      .map((s) => `${SITE_URL}${s.image}`)
      .slice(0, 4),
    featureList: project.features,
    keywords: project.techUsed.join(", "),
    ...(project.link
      ? {
          sameAs: [project.link],
          potentialAction: {
            "@type": "ViewAction",
            target: project.link,
            name: `Visit ${project.title}`,
          },
        }
      : {}),
  };
}

function buildBreadcrumbSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const softwareSchema = buildSoftwareSchema(project);
  const breadcrumbSchema = buildBreadcrumbSchema(project);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-300">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#888] dark:text-[#666] mb-12 min-w-0"
        >
          <Link
            href="/"
            className="shrink-0 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <span aria-hidden="true" className="shrink-0 text-[#ccc] dark:text-[#444]">/</span>
          <Link
            href="/projects"
            className="shrink-0 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          >
            Projects
          </Link>
          <span aria-hidden="true" className="shrink-0 text-[#ccc] dark:text-[#444]">/</span>
          <span
            aria-current="page"
            className="truncate text-[#1a1a1a] dark:text-[#e5e5e5]"
            title={project.title}
          >
            {project.title}
          </span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1a1a1a] dark:text-[#e5e5e5]">
              {project.title}
            </h1>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#888] dark:text-[#666]">
              {project.language}
            </span>
          </div>
          <p className="text-base leading-relaxed text-[#555] dark:text-[#999] max-w-2xl">
            {project.description}
          </p>

          {project.link && (
            <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] hover:opacity-80 transition-all"
              >
                Visit {project.title}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5C2 13.216 2.784 14 3.75 14h8.5A1.75 1.75 0 0 0 14 12.25V8.25a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 12.25 15.5h-8.5A3.25 3.25 0 0 1 .5 12.25v-8.5A3.25 3.25 0 0 1 3.75.5h4a.75.75 0 0 1 0 1.5h-4Z" />
                  <path d="M9.5.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V2.56L8.78 8.28a.75.75 0 1 1-1.06-1.06L13.44 1.5h-3.19a.75.75 0 0 1-.75-.75Z" />
                </svg>
              </a>
            </div>
          )}
        </header>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#666] dark:text-[#888] mb-4">
            About
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#444] dark:text-[#aaa]">
            {project.longDescription}
          </p>
        </section>

        {/* Features */}
        {project.features?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#666] dark:text-[#888] mb-4">
              Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-relaxed text-[#444] dark:text-[#aaa] marker:text-[#bbb] dark:marker:text-[#555]">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech stack */}
        {project.techUsed?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#666] dark:text-[#888] mb-4">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techUsed.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f0f0f0] dark:bg-[#252525] text-[#444] dark:text-[#bbb]"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots */}
        {project.screenshots?.length > 0 && (
          <section className="mb-16">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#666] dark:text-[#888] mb-4">
              Screenshots
            </h2>
            <div className="space-y-4">
              {project.screenshots.map((shot, i) => (
                <figure key={shot.image} className="overflow-hidden rounded-lg border border-[#eaeaea] dark:border-[#1e1e1e]">
                  <Image
                    src={shot.image}
                    alt={`${project.title} — ${shot.label}`}
                    width={1600}
                    height={900}
                    sizes="(min-width: 768px) 720px, 100vw"
                    priority={i === 0}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-2 text-[11px] text-[#888] dark:text-[#666] border-t border-[#eaeaea] dark:border-[#1e1e1e] bg-white dark:bg-[#0d0d0d]">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-[#eee] dark:border-[#1a1a1a] flex items-center justify-between text-[12px] text-[#888] dark:text-[#666]">
          <Link href="/projects" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
            ← All projects
          </Link>
          <span className="text-[#bbb] dark:text-[#555]">
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
        </footer>
      </article>
    </div>
  );
}
