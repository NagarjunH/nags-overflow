import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import BlogContent from "@/components/blog/BlogContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";
import Link from "next/link";

import {
  getAllBlogs,
  getBlogBySlug,
} from "@/lib/mdx";

import { extractHeadings } from "@/lib/toc";

import { Blog } from "@/types/blog.types";
import AdsenseBanner from "@/components/ads/AdsenseBanner";

type BlogDetailsPageProps = {
  params: {
    slug: string;
  };
};

type GenerateMetadataProps = {
  params: {
    slug: string;
  };
};

/* ----------------------------- */
/* Static Generation */
/* ----------------------------- */

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog: Blog) => ({
    slug: blog.slug,
  }));
}

/* ----------------------------- */
/* Dynamic Metadata */
/* ----------------------------- */

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {

  const blog = getBlogBySlug(
    params.slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,

    description: blog.description,

    openGraph: {
      title: blog.title,

      description: blog.description,

      type: "article",
    },
  };
}

/* ----------------------------- */
/* Page Component */
/* ----------------------------- */

export default function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {

  /* Current Blog */

  const blog = getBlogBySlug(
    params.slug
  );

  /* Blog Not Found */

  if (!blog) {
    return (
      <MainLayout>
        <Container>
          <div className="py-24 text-white">
            Blog not found.
          </div>
        </Container>
      </MainLayout>
    );
  }

  /* All Blogs */

  const allBlogs = getAllBlogs();

  /* Related Blogs */

  const relatedBlogs =
    allBlogs
      .filter(
        (item) =>
          item.category ===
            blog.category &&
          item.slug !== blog.slug
      )
      .slice(0, 3);

  /* Table Of Contents */

  const headings =
    extractHeadings(
      blog.content || ""
    );

  return (
    <MainLayout>

      {/* Reading Progress */}

      <ReadingProgress />

      <section className="py-24">

        <Container>

          <div className="grid gap-16 lg:grid-cols-[1fr_300px]">

            {/* Main Content */}

            <article>

              {/* Category */}

            <Link
              href={`/category/${blog.category}`}
              className="rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-400 transition hover:bg-sky-500/20"
            >
              {blog.category}
            </Link>

              {/* Title */}

              <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
                {blog.title}
              </h1>

              {/* Metadata */}

              <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-400">

                <span>
                  Author: {blog.author}
                </span>

                <span>
                  {blog.publishedAt}
                </span>

                <span>
                  {blog.readTime}
                </span>

              </div>

              {/* Blog Content */}

              <BlogContent
                content={blog.content || ""}
              />

              {/* Adsense Banner */}

              <AdsenseBanner/>

              {/* Tags */}

              <div className="mt-16 flex flex-wrap gap-4">
                
                {blog.tags?.map(
                  (tag: string) => (
                  
                    <Link
                      key={tag}
                      href={`/tag/${tag}`}
                      className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                    >
                      #{tag}
                    </Link>
              
                  )
                )}
              
              </div>

              {/* Related Posts */}

              <RelatedPosts
                blogs={relatedBlogs}
              />

            </article>

            {/* Sidebar */}

            <aside className="hidden lg:block">

              <TableOfContents
                headings={headings}
              />

            </aside>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}