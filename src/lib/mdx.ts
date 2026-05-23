import fs from "fs";

import path from "path";

import matter from "gray-matter";

import readingTime from "reading-time";

import { Blog } from "@/types/blog.types";

const blogsDirectory = path.join(
  process.cwd(),
  "src/content/blogs"
);

/* ----------------------------- */
/* Get All Blogs */
/* ----------------------------- */

export function getAllBlogs(): Blog[] {

  const files =
    fs.readdirSync(blogsDirectory);

  return files.map((fileName) => {

    const filePath = path.join(
      blogsDirectory,
      fileName
    );

    const fileContent =
      fs.readFileSync(filePath, "utf-8");

    const { data, content } =
      matter(fileContent);

    return {

      title:
        data.title || "",

      description:
        data.description || "",

      slug:
        data.slug ||
        fileName.replace(".mdx", ""),

      category:
        data.category || "",

      author:
        data.author || "",

      publishedAt:
        data.publishedAt || "",

      tags:
        data.tags || [],

      content,

      readTime:
        readingTime(content).text,

      coverImage:
        data.coverImage || "",
    };
  });
}

/* ----------------------------- */
/* Get Single Blog By Slug */
/* ----------------------------- */

export function getBlogBySlug(
  slug: string
): Blog | null {

  const blogs =
    getAllBlogs();

  return (
    blogs.find(
      (blog) =>
        blog.slug === slug
    ) || null
  );
}

/* ----------------------------- */
/* Get Blogs By Category */
/* ----------------------------- */

export function getBlogsByCategory(
  category: string
): Blog[] {

  const blogs =
    getAllBlogs();

  return blogs.filter(
    (blog) =>
      blog.category
        .toLowerCase()
        ===
      decodeURIComponent(category)
        .toLowerCase()
  );
}

/* ----------------------------- */
/* Get Blogs By Tag */
/* ----------------------------- */

export function getBlogsByTag(
  tag: string
): Blog[] {

  const blogs =
    getAllBlogs();

  return blogs.filter(
    (blog) =>
      blog.tags?.some(
        (item) =>
          item.toLowerCase()
          ===
          decodeURIComponent(tag)
            .toLowerCase()
      )
  );
}