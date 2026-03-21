import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Sharma — AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer building production-grade LLM applications, RAG systems, and full-stack products. Available for roles and freelance projects.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "LangChain",
    "LLM",
    "RAG",
    "React",
    "Next.js",
    "FastAPI",
  ],
  icons: {
    icon: "/mohit-sharma.png",
    apple: "/mohit-sharma.png",
  },
  openGraph: {
    title: "Mohit Sharma — AI Engineer & Full-Stack Developer",
    description:
      "Building production-grade AI applications and full-stack products.",
    type: "website",
    url: "https://mohitcodes.com",
  },
};

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
