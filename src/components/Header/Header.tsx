import Link from 'next/link';
import { Button } from '../ui/button';

import Nav from '../Nav';
import MobileNav from '../MobileNav';
import BrandLogo from '../BrandLogo';
import { CONTACT_MAILTO } from '@/src/constant/constant';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="page-shell flex items-center justify-between">
        <BrandLogo />

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={CONTACT_MAILTO}>
            <Button>Work With Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
