import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <section className="min-h-[100dvh] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="page-shell">{children}</div>
    </section>
  );
};

export default PageShell;
