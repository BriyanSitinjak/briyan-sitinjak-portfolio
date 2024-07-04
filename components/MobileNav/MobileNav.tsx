'use client';

import React from 'react';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { links } from '@/src/constant/constant';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={'/'}>
            <h1 className="text-4xl font-semibold">
              Briyan Sitinjak <span className="text-accent">.</span>{' '}
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
