import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

export default function PrivacyPolicyPage() {

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <div className="max-w-4xl">

            <h1 className="text-5xl font-bold text-white">
              Privacy Policy
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              This website may collect analytics and usage data to improve user experience.
            </p>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}