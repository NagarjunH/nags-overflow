import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";
import Categories from "@/components/home/Categories";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <MainLayout>
<section className="py-32">
  <Container>
    <div className="max-w-4xl">
      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-400">
        Modern Developer Blog
      </span>

      <h1 className="mt-8 text-7xl font-bold leading-tight text-white">
        Deep Dive Into
        Modern Software
        Engineering
      </h1>

      <p className="mt-8 text-xl leading-relaxed text-slate-400">
        Learn React, JavaScript,
        AI Engineering, Automation
        and scalable frontend
        architecture through
        deeply explained practical content.
      </p>
    </div>
  </Container>
</section>
      <Categories />
      <FeaturedBlogs />
      <Newsletter />
    </MainLayout>
  );
}