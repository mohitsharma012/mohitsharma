import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, profile } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    template: "%s | Mohit Sharma",
  },
  description:
    "AI Engineer building production-grade LLM applications, RAG systems, and full-stack products. Projects, tech stack, and contact — clean and minimal.",
  keywords: [
    "Mohit Sharma",
    "AI Engineer",
    "Full-Stack Developer",
    "LangChain",
    "LLM",
    "RAG",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  icons: {
    icon: profile.avatar,
    apple: profile.avatar,
  },
  openGraph: {
    title: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade AI applications and full-stack products. Projects, tech stack, and contact.",
    type: "website",
    url: SITE_URL,
    siteName: "Mohit Sharma Portfolio",
    locale: "en_US",
    images: [
      {
        url: profile.avatar,
        width: 400,
        height: 400,
        alt: "Mohit Sharma — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade AI applications and full-stack products.",
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": [{ url: `${SITE_URL}/feed.xml`, title: "Writing — Mohit Sharma" }],
    },
  },
};

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme') || 'light';
    var html = document.documentElement;
    if (theme === 'terminal') {
      html.classList.add('dark', 'terminal');
    } else if (theme === 'dark') {
      html.classList.add('dark');
    }
  } catch(e) {}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}${profile.avatar}`,
  jobTitle: "AI Engineer & Full-Stack Developer",
  sameAs: [profile.github, profile.linkedin, profile.instagram].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content="#fafafa"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
