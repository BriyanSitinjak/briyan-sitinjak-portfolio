import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

import Nav from '../Nav';
import MobileNav from '../MobileNav';
import BriyanIcon from '../../src/assets/logo_briyan_sitinjak.png';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
          <h1 className="text-4xl font-semibold flex items-center">
            <Image src={BriyanIcon} alt="Briyan Sitinjak Icon" width={100} height={100} />
            <span className="text-accent ml-4">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'wa.me/mailto:Imanbriyan@gmail.com'}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
