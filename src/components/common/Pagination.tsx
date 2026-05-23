import Link from "next/link";

type PaginationProps = {
  currentPage: number;

  totalPages: number;
};

const Pagination = ({
  currentPage,
  totalPages,
}: PaginationProps) => {

  const pages =
    Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );

  return (
    <div className="mt-16 flex items-center justify-center gap-4">

      {pages.map((page) => {

        const isActive =
          currentPage === page;

        return (
          <Link
            key={page}
            href={`/blogs?page=${page}`}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border transition ${
              isActive
                ? "border-sky-500 bg-sky-500/10 text-sky-400"
                : "border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-400"
            }`}
          >
            {page}
          </Link>
        );
      })}

    </div>
  );
};

export default Pagination;