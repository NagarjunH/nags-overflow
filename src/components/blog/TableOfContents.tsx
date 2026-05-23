"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;

  text: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

const TableOfContents = ({
  headings,
}: TableOfContentsProps) => {

  const [activeId, setActiveId] =
    useState("");

  useEffect(() => {
    const handleScroll = () => {

      const headingElements =
        headings.map((heading) => ({
          id: heading.id,

          element:
            document.getElementById(
              heading.id
            ),
        }));

      const visibleHeading =
        headingElements.find(
          ({ element }) => {
            if (!element) {
              return false;
            }

            const rect =
              element.getBoundingClientRect();

            return (
              rect.top >= 0 &&
              rect.top <= 200
            );
          }
        );

      if (visibleHeading) {
        setActiveId(
          visibleHeading.id
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [headings]);

  return (
    <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">

      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Table of Contents
      </h3>

      <div className="mt-6 flex flex-col gap-4">

        {headings.map((heading) => {

          const isActive =
            activeId === heading.id;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`transition ${
                isActive
                  ? "text-sky-400"
                  : "text-slate-600 hover:text-sky-400 dark:text-slate-400"
              }`}
            >
              {heading.text}
            </a>
          );
        })}

      </div>

    </div>
  );
};

export default TableOfContents;
