import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
