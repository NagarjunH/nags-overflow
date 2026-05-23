import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono =
  Geist_Mono({
    variable:
      "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Nag's Overflow",
  description:
    "Deep dive into React, JavaScript, AI Engineering and System Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
           <body
       className={`
         ${geistSans.variable}
         ${geistMono.variable}
       `}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}