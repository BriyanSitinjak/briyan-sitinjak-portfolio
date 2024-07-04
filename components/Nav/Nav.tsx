'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/src/constant/constant';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${
              link.path === pathname && 'text-accent border-accent border-b-2'
            } capitalize font-medium hover:text-accent-hover transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
