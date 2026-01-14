import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.DOMAIN_NAME as string,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
