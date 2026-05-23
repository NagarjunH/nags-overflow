"use client";

import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import Container from "@/components/common/Container";

import ThemeToggle from "@/components/common/ThemeToggle";

import { ROUTES } from "@/constants/routes";

const Navbar = () => {

  const pathname =
    usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const navItems = [
    {
      label: "Home",
      href: ROUTES.HOME,
    },

    {
      label: "Blogs",
      href: ROUTES.BLOGS,
    },

    {
      label: "Search",
      href: ROUTES.SEARCH,
    },

    {
      label: "About",
      href: ROUTES.ABOUT,
    },

    {
      label: "Contact",
      href: ROUTES.CONTACT,
    },
  ];

  return (

    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/80">

      <Container>

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            href={ROUTES.HOME}
            className="transition hover:scale-[1.02]"
          >

            <Image
              src="/logos/logo.png"
              alt="Nag's Overflow"
              width={85}
              height={85}
              priority
              className="object-contain transition hover:scale-105"
            />

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">

            {navItems.map((item) => {

              const isActive =
                pathname === item.href;

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold tracking-wide transition duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-700 hover:text-cyan-400 dark:text-slate-300"
                  }`}
                >

                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  )}

                </Link>

              );
            })}

            <ThemeToggle />

          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="text-3xl text-slate-800 dark:text-white md:hidden"
          >

            {isOpen ? (
              <IoClose />
            ) : (
              <HiOutlineMenuAlt3 />
            )}

          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (

          <div className="border-t border-slate-200 py-6 dark:border-slate-800 md:hidden">

            <nav className="flex flex-col gap-6">

              {navItems.map((item) => {

                const isActive =
                  pathname === item.href;

                return (

                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`text-base font-medium transition ${
                      isActive
                        ? "text-sky-500"
                        : "text-slate-700 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
                    }`}
                  >
                    {item.label}
                  </Link>

                );
              })}

              <div className="pt-2">

                <ThemeToggle />

              </div>

            </nav>

          </div>

        )}

      </Container>

    </header>

  );
};

export default Navbar;
