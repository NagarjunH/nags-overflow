import Container from "@/components/common/Container";

import { categories } from "@/data/categories";

const Categories = () => {
  return (
    <section className="pb-24">
      <Container>
        <h2 className="text-4xl font-bold text-slate-950 dark:text-white">
          Categories
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
