import { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: RESUME_DATA.personalWebsiteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
