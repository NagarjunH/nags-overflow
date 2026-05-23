import MainLayout from "@/components/layout/MainLayout";

import Container from "@/components/common/Container";

export default function ContactPage() {

  return (
    <MainLayout>

      <section className="py-24">

        <Container>

          <div className="max-w-3xl">

            <h1 className="text-5xl font-bold text-white">
              Contact
            </h1>

            <p className="mt-8 text-lg text-slate-400">
              Reach out for collaborations, partnerships or developer discussions.
            </p>

            <div className="mt-12">

              <input
                type="text"
                placeholder="Your Name"
                className="mb-6 h-14 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 text-white outline-none focus:border-sky-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="mb-6 h-14 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 text-white outline-none focus:border-sky-500"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white outline-none focus:border-sky-500"
              />

              <button className="mt-6 rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-400">
                Send Message
              </button>

            </div>

          </div>

        </Container>

      </section>

    </MainLayout>
  );
}