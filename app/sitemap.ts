import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = process.env.DOMAIN_NAME;

  if (!SITE_URL) {
    throw new Error(
      "DOMAIN_NAME env variable is missing. Please add it in .env"
    );
  }

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
