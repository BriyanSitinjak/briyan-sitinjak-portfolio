'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import BrandLogo from '../BrandLogo';
import NavLinks from '../NavLinks';

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center justify-center" aria-label="Open menu">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 flex items-center justify-center text-center text-2xl">
          <BrandLogo />
        </div>
        <NavLinks variant="mobile" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
