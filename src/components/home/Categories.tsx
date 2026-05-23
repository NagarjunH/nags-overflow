import Container from "@/components/common/Container";

import { categories } from "@/data/categories";

const Categories = () => {
  return (
    <section className="pb-24">
      <Container>
        <h2 className="text-4xl font-bold text-white">
          Categories
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-slate-300 transition hover:border-sky-500 hover:text-white"
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