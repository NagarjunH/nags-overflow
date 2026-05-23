import BlogCard from "./BlogCard";

import { Blog } from "@/types/blog.types";

type RelatedPostsProps = {
  blogs: Blog[];

};

const RelatedPosts = ({
  blogs,
}: RelatedPostsProps) => {
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="mt-24">
      <h2 className="text-4xl font-bold text-slate-950 dark:text-white">
        Related Posts
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
