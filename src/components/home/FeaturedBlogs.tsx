import BlogCard from "@/components/blog/BlogCard";

import Container from "@/components/common/Container";

import { dummyBlogs } from "@/data/dummyBlogs";

const FeaturedBlogs = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-white">
            Featured Blogs
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedBlogs;