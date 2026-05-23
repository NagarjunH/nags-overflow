import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

export default function TermsPage() {

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <div className="max-w-4xl">

            <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
              Terms & Conditions
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              By using this website, you agree to the terms and conditions of the platform.
            </p>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}
