export const profile = {
  name: "Mohit Sharma",
  username: "mohitsharma012",
  avatar: "/mohit-sharma.png",
  bio: "AI Engineer & Full-Stack Developer. Building production-grade LLM applications, NLP pipelines, and scalable products.",
  organization: "",
  location: "",
  email: "stayer.mohit@gmail.com",
  phone: "",
  linkedin: "https://linkedin.com/in/mohitsharma012",
  github: "https://github.com/mohitsharma012",
  whatsapp: "",
  instagram: "https://www.instagram.com/_.mohit_012/",
  highlights: ["Pro", "2+ years experience"],
};

export const projects = [
  {
    title: "CareerEdge",
    description:
      "AI-powered resume optimization platform — tailors resumes to job descriptions, helps pass ATS filters",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 42,
    link: "#",
    github: "#",
  },
  {
    title: "PandaUI",
    description:
      "A developer-friendly React component library optimized for Next.js and FastAPI applications",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 28,
    link: "#",
    github: "#",
  },
  {
    title: "AlleyBot",
    description:
      "Intelligent chatbot powered by OpenAI — handles 500+ daily queries with emotional awareness",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 15,
    link: "#",
    github: "#",
  },
  {
    title: "DevilsPlanet",
    description:
      "Modern e-commerce platform for streetwear — increased online sales by 40% in two months",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 12,
    link: "#",
    github: "#",
  },
];

export const tabs: { name: string; count?: number }[] = [
  { name: "Overview" },
  { name: "Repositories", count: projects.length },
];

export const about = {
  paragraphs: [
    "I'm an **AI Engineer** with 2+ years of experience building production-grade LLM applications, NLP pipelines, and RAG architectures. I work across the full stack — from designing AI systems with LangChain and LangGraph to building fast web apps with React and FastAPI.",
    "Currently building LLM-powered tools with OpenAI, Gemini, and Groq. Previously shipped backend systems and launched products like CareerEdge and PandaUI.",
  ],
  techStack: [
    "Python", "TypeScript", "LangChain", "LangGraph", "spaCy",
    "FastAPI", "Django", "React", "Next.js",
    "PostgreSQL", "MongoDB", "Redis",
    "Docker", "AWS", "Vercel",
  ],
};

export const footerLinks = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Security", href: "#" },
  { name: "Status", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];
