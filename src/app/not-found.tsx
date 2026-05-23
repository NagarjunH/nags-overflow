import Link from "next/link";

export default function NotFoundPage() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-slate-950">

      <h1 className="text-8xl font-bold text-sky-500">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold text-black dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-400"
      >
        Back To Home
      </Link>

    </div>
  );
}