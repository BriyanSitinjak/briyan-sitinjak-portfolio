import Link from 'next/link';
import Image from 'next/image';

import BriyanIcon from '@/src/assets/logo_briyan_sitinjak.webp';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  size?: number;
  className?: string;
  accentClassName?: string;
}

const BrandLogo = ({
  size = 100,
  className,
  accentClassName,
}: BrandLogoProps) => {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      <Image src={BriyanIcon} alt="Briyan Sitinjak Icon" width={size} height={size} />
      <span className={cn('text-accent ml-4 text-4xl font-semibold', accentClassName)}>.</span>
    </Link>
  );
};

export default BrandLogo;
