import Container from "@/components/common/Container";

const Newsletter = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-950 dark:text-white">
              Join The Newsletter
            </h2>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Get deeply explained frontend,
              React and AI engineering
              articles directly in your inbox.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-2xl border border-slate-300 bg-white px-5 text-slate-950 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />

              <button className="h-14 rounded-2xl bg-sky-500 px-8 font-semibold text-slate-950 transition hover:bg-sky-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
