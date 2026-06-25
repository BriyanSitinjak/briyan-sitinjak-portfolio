'use client';

import React from 'react';
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
