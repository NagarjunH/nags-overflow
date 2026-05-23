import BlogCard from "@/components/blog/BlogCard";

import Container from "@/components/common/Container";

import { getAllBlogs } from "@/lib/mdx";

const FeaturedBlogs = () => {

  const blogs =
    getAllBlogs().slice(0, 3);

  return (

    <section className="pb-24">

      <Container>

        <div className="flex items-center justify-between">

          <h2 className="text-4xl font-bold text-black dark:text-white">

            Featured Blogs

          </h2>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (

            <BlogCard
              key={blog.slug}
              blog={blog}
            />

          ))}

        </div>

      </Container>

    </section>

  );
};

export default FeaturedBlogs;