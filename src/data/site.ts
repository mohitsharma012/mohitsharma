/** Canonical site origin. Used by sitemap, robots, schema, and metadata. */
export const SITE_URL = "https://mohitsharma.co";

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
    slug: "careeredge",
    title: "CareerEdge",
    description:
      "AI-powered platform that generates tailored, ATS-optimized resumes based on job descriptions",
    longDescription:
      "An AI-powered platform that generates tailored, ATS-optimized resumes based on user-provided job descriptions. Users can input a job description, and the system crafts a customized resume ready for download.",
    features: [
      "AI-driven resume creation aligned with specific job descriptions",
      "Seamless resume download functionality",
      "User-friendly interface for inputting job details",
      "Integration with OpenAI for content generation",
      "Backend powered by FastAPI and PostgreSQL for efficient data handling",
    ],
    techUsed: ["TypeScript", "Next.js", "FastAPI", "OpenAI", "PostgreSQL"],
    screenshots: [
      { image: "/projects/4367899465.png", label: "Platform overview" },
      { image: "/projects/12341324.png", label: "Resume optimization" },
    ],
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 42,
    link: "https://careeredge.io/",
    github: "#",
  },
  {
    slug: "pandaui",
    title: "PandaUI",
    description:
      "Sleek React component library designed to accelerate modern web development with SEO optimization",
    longDescription:
      "PandaUI is a sleek and developer-friendly React component library designed to accelerate modern web development. Built with TypeScript and optimized for Next.js and FastAPI applications, it offers a comprehensive set of customizable components that enhance SEO performance and Google rankings.",
    features: [
      "Extensive collection of reusable and accessible React components",
      "Seamless integration with Next.js for server-side rendering and static site generation",
      "Optimized for SEO to improve Google search rankings",
      "Built-in support for FastAPI backend integration",
      "Responsive design with customizable theming options",
      "Comprehensive documentation and examples for easy adoption",
    ],
    techUsed: ["TypeScript", "JavaScript", "React.js", "Next.js", "FastAPI", "PostgreSQL", "SEO"],
    screenshots: [
      { image: "/projects/4567890.png", label: "Component library" },
      { image: "/projects/6548769.png", label: "Component showcase" },
      { image: "/projects/232332323.png", label: "Documentation" },
    ],
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 28,
    link: "https://pandaui.co/",
    github: "#",
  },
  {
    slug: "textberry",
    title: "Textberry",
    description:
      "Intelligent text processing platform for smart text analysis, summarization, and keyword extraction",
    longDescription:
      "Textberry is a Python and Django-based platform designed for smart text analysis and manipulation. It offers a suite of tools for content transformation, summarization, keyword extraction, and more — perfect for writers, marketers, and developers working with textual data.",
    features: [
      "Text summarization using NLP techniques",
      "Keyword and entity extraction",
      "User-friendly interface for uploading and processing text files",
      "Django-powered backend with secure user management",
      "Support for multiple file formats (TXT, PDF, DOCX)",
      "RESTful API for third-party integrations",
    ],
    techUsed: ["Python", "Django", "HTML", "CSS", "JavaScript", "Twilio", "Firebase"],
    screenshots: [
      { image: "/projects/22232352345.png", label: "Text analysis dashboard" },
      { image: "/projects/123231123.png", label: "Processing interface" },
    ],
    language: "Python",
    langColor: "#3572A5",
    stars: 18,
    link: "https://textberry.io/",
    github: "#",
  },
  
  {
    slug: "picshare",
    title: "PicShare",
    description:
      "Social image sharing platform with real-time features, authentication, and sleek interface",
    longDescription:
      "PicShare is a modern web application for uploading, sharing, and exploring images. Built with Next.js, MongoDB, and Firebase, it delivers a seamless user experience with real-time features, secure authentication, and a sleek interface.",
    features: [
      "Image upload and sharing functionality",
      "Firebase authentication with secure login/signup",
      "Real-time updates and feed using Firebase",
      "MongoDB database for storing user and image metadata",
      "Responsive design with smooth user experience",
      "Explore and like photos from other users",
    ],
    techUsed: ["Next.js", "React", "TypeScript", "MongoDB", "Firebase"],
    screenshots: [
      { image: "/projects/512343421.png", label: "Image feed" },
      { image: "/projects/57666758.png", label: "Upload interface" },
      { image: "/projects/765878698.png", label: "Gallery view" },
    ],
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 22,
    link: "https://picshare.mohitcodes.com/",
    github: "#",
  },
  
  {
    slug: "alleybot",
    title: "AlleyBot",
    description:
      "Intelligent AI chatbot powered by OpenAI with real-time conversations and emotional awareness",
    longDescription:
      "AlleyBot is an intelligent chatbot powered by OpenAI, designed to be a friendly and engaging companion. Built with Node.js and Next.js, AlleyBot offers real-time conversations, emotional awareness, and a natural chatting experience.",
    features: [
      "Conversational AI powered by OpenAI's GPT models",
      "Real-time chat interface with contextual memory",
      "Emotionally aware responses for a more human experience",
      "Node.js backend with secure API routing",
      "Responsive and clean UI built with Next.js",
      "User-friendly design for all age groups",
    ],
    techUsed: ["Node.js", "Next.js", "React", "TypeScript", "OpenAI API"],
    screenshots: [
      { image: "/projects/324324443.png", label: "Chat interface" },
      { image: "/projects/2342432434.png", label: "Conversation view" },
    ],
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 19,
    link: "",
    github: "#",
  },
  {
    slug: "devilsplanet",
    title: "DevilsPlanet",
    description:
      "Sleek e-commerce platform for trendy clothing and streetwear with secure checkout",
    longDescription:
      "DevilsPlanet is a sleek and modern e-commerce platform for trendy clothing and streetwear. Built with React and Node.js, the website delivers a fast, intuitive shopping experience with dynamic product listings and secure checkout.",
    features: [
      "Dynamic product catalog with filtering and sorting",
      "User authentication and profile management",
      "Shopping cart with real-time updates",
      "Secure payment integration using Stripe",
      "Order tracking and admin dashboard for inventory",
      "Responsive UI optimized for mobile and desktop",
    ],
    techUsed: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Stripe API"],
    screenshots: [
      { image: "/projects/323434322.png", label: "Storefront" },
      { image: "/projects/4565333244.png", label: "Product catalog" },
      { image: "/projects/32324432.png", label: "Checkout flow" },
    ],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 12,
    link: "",
    github: "#",
  },
];

export type Project = (typeof projects)[number];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

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
