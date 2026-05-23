import Container from "@/components/common/Container";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="py-8 text-center text-slate-600 dark:text-slate-400">
          &copy; 2026 Nag&apos;s Overflow.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
