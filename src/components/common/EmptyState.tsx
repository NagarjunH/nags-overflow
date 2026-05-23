type EmptyStateProps = {
  title: string;

  description: string;
};

const EmptyState = ({
  title,
  description,
}: EmptyStateProps) => {

  return (
    <div className="rounded-3xl border border-slate-300 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">

      <h3 className="text-3xl font-bold text-black dark:text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;