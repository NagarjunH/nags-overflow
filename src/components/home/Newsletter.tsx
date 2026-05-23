import Container from "@/components/common/Container";

const Newsletter = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white">
              Join The Newsletter
            </h2>

            <p className="mt-4 text-lg text-slate-400">
              Get deeply explained frontend,
              React and AI engineering
              articles directly in your inbox.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-5 text-white outline-none focus:border-sky-500"
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