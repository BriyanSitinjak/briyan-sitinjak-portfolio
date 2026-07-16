'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/src/constant/constant';
import { cn } from '@/lib/utils';

type NavLinksVariant = 'desktop' | 'mobile' | 'footer';

interface NavLinksProps {
  variant?: NavLinksVariant;
  className?: string;
}

const variantStyles: Record<NavLinksVariant, string> = {
  desktop: 'flex gap-8',
  mobile: 'flex flex-col justify-center items-center gap-8',
  footer: 'flex flex-col gap-3',
};

const linkStyles: Record<NavLinksVariant, (isActive: boolean) => string> = {
  desktop: (isActive) =>
    cn(
      'capitalize font-medium hover:text-accent-hover transition-all',
      isActive && 'text-accent border-accent border-b-2'
    ),
  mobile: (isActive) =>
    cn(
      'capitalize font-medium hover:text-accent-hover transition-all',
      isActive && 'text-accent border-accent border-b-2'
    ),
  footer: () => 'w-fit capitalize text-white/80 transition-colors hover:text-accent',
};

const NavLinks = ({ variant = 'desktop', className }: NavLinksProps) => {
  const pathname = usePathname();
  const navLinks =
    variant === 'mobile' ? links : links.filter((link) => !link.mobileOnly);

  return (
    <nav className={cn(variantStyles[variant], className)}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={linkStyles[variant](link.path === pathname)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
