"use client";

type ErrorPageProps = {
  error: Error;

  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-slate-950">

      <h1 className="text-5xl font-bold text-black dark:text-white">
        Something went wrong
      </h1>

      <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-400">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-10 rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-400"
      >
        Try Again
      </button>

    </div>
  );
}