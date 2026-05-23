"use client";

import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [width, setWidth] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const docHeight =
        document.body.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / docHeight) * 100;

      setWidth(progress);
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
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">

      <div
        className="h-full bg-sky-500 transition-all duration-150"
        style={{
          width: `${width}%`,
        }}
      />

    </div>
  );
};

export default ReadingProgress;