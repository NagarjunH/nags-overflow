import fs from "fs";

import path from "path";

import matter from "gray-matter";

import readingTime from "reading-time";

const blogsDirectory = path.join(
  process.cwd(),
  "src/content/blogs"
);

export function getAllBlogs() {
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
      ...data,

      content,

      readingTime:
        readingTime(content).text,
    };
  });
}

export function getBlogBySlug(
  slug: string
) {
  const files =
    fs.readdirSync(blogsDirectory);

  const matchedFile = files.find(
    (file) =>
      file.replace(".mdx", "") === slug
  );

  if (!matchedFile) {
    return null;
  }

  const filePath = path.join(
    blogsDirectory,
    matchedFile
  );

  const fileContent =
    fs.readFileSync(filePath, "utf-8");

  const { data, content } =
    matter(fileContent);

  return {
    ...data,

    content,

    readingTime:
      readingTime(content).text,
  };
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
      category.toLowerCase()
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
          tag.toLowerCase()
      )
  );
}