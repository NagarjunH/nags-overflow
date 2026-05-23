import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

import BlogCard from "@/components/blog/BlogCard";

import Pagination from "@/components/common/Pagination";

import { getAllBlogs } from "@/lib/mdx";

type BlogsPageProps = {
  searchParams: {
    page?: string;
  };
};

const POSTS_PER_PAGE = 6;

export default function BlogsPage({
  searchParams,
}: BlogsPageProps) {

  const blogs = getAllBlogs();

  const currentPage =
    Number(searchParams.page) || 1;

  const totalPages = Math.ceil(
    blogs.length / POSTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) *
    POSTS_PER_PAGE;

  const endIndex =
    startIndex + POSTS_PER_PAGE;

  const currentBlogs =
    blogs.slice(
      startIndex,
      endIndex
    );

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
            All Blogs
          </h1>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {currentBlogs.map(
              (blog) => (

                <BlogCard
                  key={blog.slug}
                  blog={blog}
                />

              )
            )}

          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />

        </Container>

      </section>

    </MainLayout>
  );
}
