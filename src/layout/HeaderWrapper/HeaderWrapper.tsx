'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

const HeaderWrapper = () => {
  const pathname = usePathname();
  
  if (pathname === '/anesya') {
    return null;
  }
  
  return <Header />;
};

export default HeaderWrapper; 