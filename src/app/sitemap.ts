import { MetadataRoute } from "next";

import { getAllBlogs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {

  const blogs =
    getAllBlogs();

  const blogEntries =
    blogs.map((blog) => ({
      url:
        `https://nagsoverflow.com/blogs/${blog.slug}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority: 0.8,
    }));

  return [
    {
      url:
        "https://nagsoverflow.com",

      lastModified:
        new Date(),

      changeFrequency:
        "daily",

      priority: 1,
    },

    {
      url:
        "https://nagsoverflow.com/blogs",

      lastModified:
        new Date(),

      changeFrequency:
        "daily",

      priority: 0.9,
    },

    ...blogEntries,
  ];
}