import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

import BlogCard from "@/components/blog/BlogCard";

import {
  getAllBlogs,
  getBlogsByTag,
} from "@/lib/mdx";

type TagPageProps = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {

  const blogs =
    getAllBlogs();

  const tags =
    blogs.flatMap(
      (blog) =>
        blog.tags || []
    );

  const uniqueTags =
    [...new Set(tags)];

  return uniqueTags.map(
    (tag) => ({
      tag,
    })
  );
}

export default function TagPage({
  params,
}: TagPageProps) {

  const blogs =
    getBlogsByTag(
      params.tag
    );

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <h1 className="text-5xl font-bold capitalize text-white">

            #{params.tag}

          </h1>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (

              <BlogCard
                key={blog.slug}
                blog={blog}
              />

            ))}

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}