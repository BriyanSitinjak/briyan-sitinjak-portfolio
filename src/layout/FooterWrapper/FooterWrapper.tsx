'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const FooterWrapper = () => {
  const pathname = usePathname();

  if (pathname === '/anesya') {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;

