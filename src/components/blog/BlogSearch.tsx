"use client";

import { useState } from "react";

import BlogCard from "./BlogCard";

import { Blog } from "@/types/blog.types";

type BlogSearchProps = {
  blogs: Blog[];
};

const BlogSearch = ({
  blogs,
}: BlogSearchProps) => {

  const [query, setQuery] =
    useState("");

  const filteredBlogs =
    blogs.filter((blog) => {

      const searchText = `
        ${blog.title}
        ${blog.description}
        ${blog.category}
        ${blog.tags?.join(" ")}
      `.toLowerCase();

      return searchText.includes(
        query.toLowerCase()
      );
    });

  return (
    <div>

      {/* Search Input */}

      <div className="mb-12">

        <input
          type="text"
          placeholder="Search blogs..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="h-14 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 text-white outline-none transition focus:border-sky-500"
        />

      </div>

      {/* Results */}

      {filteredBlogs.length > 0 ? (

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredBlogs.map(
            (blog) => (

              <BlogCard
                key={blog.slug}
                blog={blog}
              />

            )
          )}

        </div>

      ) : (

        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-12 text-center">

          <h3 className="text-2xl font-bold text-white">
            No blogs found
          </h3>

          <p className="mt-4 text-slate-400">
            Try searching with different keywords.
          </p>

        </div>

      )}

    </div>
  );
};

export default BlogSearch;