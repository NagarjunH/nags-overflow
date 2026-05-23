"use client";

import { useTheme } from "next-themes";

import {
  useEffect,
  useState,
} from "react";

const ThemeToggle = () => {

  const {
    theme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
    >
      {theme === "dark"
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;