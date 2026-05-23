import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

import BlogSearch from "@/components/blog/BlogSearch";

import { getAllBlogs } from "@/lib/mdx";

export default function SearchPage() {

  const blogs =
    getAllBlogs();

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
            Search Blogs
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Search articles related to React, JavaScript, AI Engineering, System Design and more.
          </p>

          <div className="mt-14">

            <BlogSearch
              blogs={blogs}
            />

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}
