import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Socials from '@/components/Socials';
import { HOME_HEADING_INFO, links } from '@/src/constant/constant';
import BriyanIcon from '@/src/assets/logo_briyan_sitinjak.png';

const Footer = () => {
  const year = new Date().getFullYear();
  const navLinks = links.filter((link) => !link.mobileOnly);

  return (
    <footer className="mt-auto border-t border-white/10 py-10 xl:py-14">
      <div className="page-shell">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image src={BriyanIcon} alt="Briyan Sitinjak Icon" width={72} height={72} />
              <span className="text-accent ml-3 text-3xl font-semibold">.</span>
            </Link>
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
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="w-fit capitalize text-white/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
                Connect
              </p>
              <Link
                href="mailto:Imanbriyan@gmail.com?subject=Remote%20opportunity%20%E2%80%94%20Briyan%20Sitinjak"
                className="mb-4 block text-white/80 transition-colors hover:text-accent"
              >
                Imanbriyan@gmail.com
              </Link>
              <Socials
                containerStyles="flex gap-3"
                iconStytle="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {HOME_HEADING_INFO.name}. All rights reserved.</p>
          <p>Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
