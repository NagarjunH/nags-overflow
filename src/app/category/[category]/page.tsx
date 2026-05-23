import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

import BlogCard from "@/components/blog/BlogCard";

import {
  getAllBlogs,
  getBlogsByCategory,
} from "@/lib/mdx";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {

  const blogs =
    getAllBlogs();

  const categories =
    [
      ...new Set(
        blogs.map(
          (blog) =>
            blog.category
        )
      ),
    ];

  return categories.map(
    (category) => ({
      category,
    })
  );
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {

  const blogs =
    getBlogsByCategory(
      params.category
    );

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <h1 className="text-5xl font-bold capitalize text-slate-950 dark:text-white">

            {params.category} Blogs

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
