/** Canonical site origin. Used by sitemap, robots, schema, and metadata. */
export const SITE_URL = "https://mohitsharma.co";

export const profile = {
  name: "Mohit Sharma",
  username: "mohitsharma012",
  avatar: "/mohit-sharma.png",
  bio: "I build LLM-powered products end-to-end, from the prompts and pipelines to the UI people actually click.",
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
    slug: "ayeface",
    title: "AyeFace Merchant Dashboard",
    description:
      "Built the rewards, referrals, store, and advertisement modules for AyeFace's merchant platform. React on top, Node.js, Firebase, and Kafka underneath.",
    lastModified: "2025-11-20",
    longDescription:
      "AyeFace is a consumer-facing merchant platform where I shipped four core modules end-to-end: rewards, referrals, store management, and an advertisement system. The ad system was the most architecturally interesting piece — it needed to support two distinct ad types (in-app banners and outreach campaigns) with separate billing models and performance dashboards, all within the same data model.\n\nThe biggest challenge was cross-module consistency. Reward points earned from a purchase needed to instantly reflect in the referral dashboard and the store wallet. I solved this with an event-driven architecture using Apache Kafka: each module published domain events, and downstream consumers updated their own state independently. This decoupled the modules while keeping data eventually consistent at sub-second latency.\n\nOn the frontend, I built the merchant dashboard in React with role-based views — store owners saw different analytics than regional managers. Firebase Cloud Messaging handled push notifications for referral conversions and ad performance alerts. The biggest lesson was how much Kafka simplifies adding new modules later: onboarding a fifth module required zero changes to the existing four.",
    features: [
      "Rewards, referrals, store, and advertisement modules built end-to-end",
      "Advertisement system supporting both in-app and outreach ad types",
      "Push notifications integrated via Firebase Cloud Messaging",
      "Event-driven backend with Apache Kafka for cross-module messaging",
      "Database design and modeling for multi-merchant tenancy",
      "ReactJS merchant dashboard with role-based views and analytics",
    ],
    techUsed: ["React", "Node.js", "Firebase", "Apache Kafka", "Database"],
    screenshots: [
      { image: "/projects/ayeface-store.png", label: "Store management" },
      { image: "/projects/ayeface-notifications.png", label: "Notifications" },
      { image: "/projects/ayeface-ads.png", label: "Advertisements and referrals" },
    ],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 35,
    link: "https://aye-ai.org/",
    github: "#",
  },
  {
    slug: "careeredge",
    title: "CareerEdge",
    description:
      "Paste a job description, get a resume tailored to it. Built to pass ATS filters, not just look good.",
    lastModified: "2026-03-15",
    longDescription:
      "CareerEdge started from a real frustration: generic resumes get filtered out by ATS before a human ever reads them. The insight was that every job description is its own keyword document — so the resume should mirror it.\n\nThe core pipeline uses OpenAI to extract structured requirements from a job description (skills, seniority signals, must-haves vs. nice-to-haves), then maps those against the user's experience to generate a tailored resume that ranks high on ATS keyword scoring. I spent most of the engineering time on the prompt design: the first versions hallucinated experience the user hadn't listed. The fix was a two-step approach — extract user facts first, then compose — with a constraint prompt that refused to invent details not present in the input.\n\nThe backend is FastAPI with PostgreSQL storing user profiles and generation history. The front end is Next.js with a live preview pane that shows ATS score changes in real time as the resume updates. The biggest takeaway: structured output from LLMs is hard to get right at scale, and Pydantic validation as the output schema saved hours of debugging downstream.",
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
      "A React component library for shipping marketing sites that load fast and rank well. Opinionated defaults, TypeScript-first.",
    lastModified: "2025-09-10",
    longDescription:
      "PandaUI grew out of rebuilding the same marketing-site components project after project. Every time I started a new product, I'd rewrite a hero section, a pricing table, a feature grid — slightly differently each time, accumulating inconsistencies.\n\nThe library is TypeScript-first and opinionated about SEO from the start: heading hierarchy is enforced by component structure, image components require alt text at the type level, and metadata slots are built into page-level components rather than bolted on later. Next.js SSG is the primary target, so every component is designed for static rendering with zero client-side JS overhead by default.\n\nThe hardest design decision was theming. I tried CSS-in-JS first (too heavy for static sites), then CSS variables with a design token system that compiles to both Tailwind config and raw CSS. That approach lets projects use PandaUI with or without Tailwind. The component API is deliberately minimal — I removed anything I'd never used across five real projects. The outcome: faster builds, better Lighthouse scores out of the box, and a library I actually reach for instead of rewriting.",
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
    link: "",
    github: "#",
  },
  {
    slug: "textberry",
    title: "Textberry",
    description:
      "A toolkit for messy text. Summarize, extract keywords, pull out entities. Originally built for marketers; now an API I keep reaching for.",
    lastModified: "2025-06-05",
    longDescription:
      "Textberry started as a one-off tool to help a marketing team process hundreds of blog drafts — they needed summaries, keyword lists, and entity tags without touching each file manually. It turned into a general-purpose NLP API that I still use in other projects.\n\nThe core pipeline uses spaCy for entity recognition and part-of-speech tagging, with a custom summarization layer that combines extractive sentence scoring (TF-IDF weighted) with an optional abstractive pass via a small fine-tuned model. The extractive-first approach keeps latency under 200ms for documents up to 10,000 words, which matters for real-time use cases.\n\nThe platform supports TXT, PDF, and DOCX uploads with a Django backend handling parsing, job queuing, and result caching in Redis. Twilio SMS notifications alert users when long-running batch jobs complete. The RESTful API was designed for third-party integration from day one — clean JSON responses with consistent error codes. The main thing I'd do differently: swap the custom summarizer for a dedicated model endpoint from the start. The custom layer added two weeks of work for marginal quality gains over what a well-prompted API call delivers.",
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
      "A small Instagram-style image feed I built to learn Firebase real-time and Next.js together. Upload, share, like, repeat.",
    lastModified: "2025-04-18",
    longDescription:
      "PicShare was a deliberate learning project: I wanted to understand Firebase real-time subscriptions and Next.js App Router in the same build, rather than learning them separately from tutorials.\n\nThe architecture splits data concerns deliberately: MongoDB stores user profiles, image metadata, and relationship graphs (followers/following) because it's good at flexible document shapes. Firebase handles the real-time feed updates — when a followed user uploads a photo, the subscriber's feed updates without a page refresh. That separation kept the MongoDB schema clean while using Firebase for what it's actually great at.\n\nFirebase Authentication handles login with Google OAuth, which reduced session management to zero lines of custom code. The image upload flow processes files client-side to enforce a 5MB limit and JPEG/PNG validation before hitting the API — catching bad input early reduced server-side error rates significantly.\n\nThe biggest lesson: Firebase real-time listeners need careful cleanup or they accumulate as users navigate between pages, causing memory leaks and duplicate events. I spent more time on listener lifecycle management than on any feature. The outcome was a clean mental model for when to use Firebase vs. when to use a traditional polling approach.",
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
      "A chatbot that remembers context and tries to read the room. An early experiment in giving GPT a little personality.",
    lastModified: "2025-02-28",
    longDescription:
      "AlleyBot was my first serious experiment with giving an LLM a persistent personality and context memory — before LangChain's memory abstractions existed in their current form, so I built the context management myself.\n\nThe core challenge was conversation memory within OpenAI's context window limits. I implemented a sliding window approach: the last N turns are sent verbatim, while older turns are compressed into a rolling summary that's prepended to each request. The summary is itself generated by a smaller, cheaper model call — so long conversations stay coherent without ballooning token costs.\n\nEmotional awareness came from a lightweight sentiment classification step run on each user message before it reached GPT. The classifier output influenced the system prompt tone — not through explicit mood labels, but by selecting from a small set of response style templates. The effect was subtle but made conversations feel less robotic.\n\nThe Node.js backend handles session management and API routing, with the Next.js frontend providing a clean real-time chat UI. The main takeaway: context management is the hardest part of building chatbots, and the gap between a demo that works for 5 turns and one that works for 50 is almost entirely about how you handle memory.",
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
      "A streetwear storefront, end-to-end: catalog, cart, Stripe checkout, admin panel. Where I learned how much an e-commerce admin actually needs.",
    lastModified: "2024-12-10",
    longDescription:
      "DevilsPlanet was my first full e-commerce build, and the scope grew faster than expected — which turned out to be the most educational part. What started as a product catalog and cart became a full storefront with inventory management, order tracking, and an admin dashboard over three months.\n\nThe product catalog supports filtering by category, size, and price range using MongoDB's aggregation pipeline. Cart state lives in the database rather than localStorage (after learning that localStorage-only carts break the moment a user switches devices mid-session). Stripe Checkout handles payments with webhook verification for order confirmation — the webhook integration was the most finicky piece, requiring idempotency handling to prevent duplicate orders on retried events.\n\nThe admin dashboard ended up being half the total work. Store owners needed real-time inventory counts, low-stock alerts, order fulfillment status, and basic sales analytics. I built this with a React dashboard consuming a dedicated admin API layer with role-based access.\n\nThe main lesson: e-commerce admin tooling is where the real complexity lives, not the storefront. Every feature a customer uses generates three admin requirements: a way to configure it, a way to view its state, and a way to fix it when something goes wrong. Building both sides simultaneously forced better API design from the start.",
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
    "I'm an **AI engineer**, but the honest version is: I'm a builder who got obsessed with LLMs. The last couple of years I've been shipping production AI (RAG pipelines, agentic tools, and the evals nobody talks about), mostly with **LangChain**, **LangGraph**, and whatever model is winning that week (OpenAI, Gemini, Groq).",
    "I came up doing full-stack work (Django, FastAPI, Next.js), so I tend to build AI features the way I'd build any product: as small as possible, instrumented, and within reach of a real user. Some of that ended up in **CareerEdge** and **PandaUI**; the rest lives in the side projects below.",
    "If you're working on something interesting at the intersection of LLMs and product, I'd love to hear about it. My email's down at the bottom.",
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
  { name: "Privacy", href: "/privacy" },
  { name: "Security", href: "#" },
  { name: "Status", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];
