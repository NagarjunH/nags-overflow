import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

export default function AboutPage() {

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <div className="max-w-4xl">

            <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
              About Nag&apos;s Overflow
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Nag&apos;s Overflow is a developer-focused platform sharing deeply explained articles about React, JavaScript, Next.js, AI Engineering, System Design and modern web development.
            </p>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}
