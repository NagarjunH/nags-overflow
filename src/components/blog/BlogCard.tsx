import Link from "next/link";

import Image from "next/image";

import { Blog } from "@/types/blog.types";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({
  blog,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-sky-500"
    >
      {/* Thumbnail */}

      <div className="relative h-56 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt={blog.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-400">
            {blog.category}
          </span>

          <span className="text-sm text-slate-500">
            {blog.readTime}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white transition group-hover:text-sky-400">
          {blog.title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          {blog.description}
        </p>

        <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6 text-sm text-slate-500">
          <span>{blog.author}</span>

          <span>{blog.publishedAt}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;