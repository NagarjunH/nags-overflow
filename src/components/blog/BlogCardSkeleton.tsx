const BlogCardSkeleton = () => {

  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900">

      <div className="h-56 bg-slate-300 dark:bg-slate-800" />

      <div className="p-6">

        <div className="h-6 w-24 rounded bg-slate-300 dark:bg-slate-700" />

        <div className="mt-6 h-8 w-full rounded bg-slate-300 dark:bg-slate-700" />

        <div className="mt-4 h-4 w-full rounded bg-slate-300 dark:bg-slate-700" />

        <div className="mt-3 h-4 w-2/3 rounded bg-slate-300 dark:bg-slate-700" />

      </div>

    </div>
  );
};

export default BlogCardSkeleton;