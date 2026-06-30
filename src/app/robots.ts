import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
