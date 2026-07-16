import Link from 'next/link';

import Socials from '@/components/Socials';
import BrandLogo from '@/components/BrandLogo';
import NavLinks from '@/components/NavLinks';
import { CONTACT_EMAIL, CONTACT_MAILTO, HOME_HEADING_INFO } from '@/src/constant/constant';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 py-10 xl:py-14">
      <div className="page-shell">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-sm">
            <BrandLogo size={72} accentClassName="ml-3 text-3xl" />
            <p className="mt-4 text-lg font-semibold text-white">{HOME_HEADING_INFO.name}</p>
            <p className="mt-1 text-sm text-accent">{HOME_HEADING_INFO.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Jakarta, Indonesia (GMT+7) · Open to remote contract, freelance, and full-time
              roles.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 xl:gap-24">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                Navigate
              </p>
              <NavLinks variant="footer" />
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                Connect
              </p>
              <Link
                href={CONTACT_MAILTO}
                className="mb-4 block text-white/80 transition-colors hover:text-accent"
              >
                {CONTACT_EMAIL}
              </Link>
              <Socials
                containerStyles="flex gap-3"
                iconStytle="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {HOME_HEADING_INFO.name}. All rights reserved.
          </p>
          <p>Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
