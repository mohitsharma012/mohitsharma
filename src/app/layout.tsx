import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitsharma.co"),
  title: {
    default: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    template: "%s | Mohit Sharma",
  },
  description:
    "AI Engineer building production-grade LLM applications, RAG systems, and full-stack products. Explore my portfolio in your preferred style.",
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
  authors: [{ name: "Mohit Sharma", url: "https://mohitsharma.co" }],
  creator: "Mohit Sharma",
  icons: {
    icon: "/mohit-sharma.png",
    apple: "/mohit-sharma.png",
  },
  openGraph: {
    title: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade AI applications and full-stack products. Explore my portfolio.",
    type: "website",
    url: "https://mohitsharma.co",
    siteName: "Mohit Sharma Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/mohit-sharma.png",
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
    images: ["/mohit-sharma.png"],
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
    canonical: "https://mohitsharma.co",
  },
};

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Sharma",
  url: "https://mohitsharma.co",
  jobTitle: "AI Engineer & Full-Stack Developer",
  sameAs: [
    "https://github.com/mohitsharma012",
    "https://linkedin.com/in/mohitsharma012",
    "https://www.instagram.com/_.mohit_012/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
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
