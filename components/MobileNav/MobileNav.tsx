'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { links } from '@/src/constant/constant';
import BriyanIcon from '../../src/assets/logo_briyan_sitinjak.png';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl flex items-center justify-center">
          <Link href={'/'}>
            <h1 className="text-4xl font-semibold">
              <Image src={BriyanIcon} alt="Briyan Sitinjak Icon" width={100} height={100} />
              <span className="text-accent ml-4">.</span>
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
