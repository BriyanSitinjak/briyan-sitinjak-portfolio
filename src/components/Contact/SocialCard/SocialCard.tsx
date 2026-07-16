import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { fadeUpItem } from '@/lib/motion';
import { glassCardClassName } from '@/components/ui/glass-card';

interface SocialCardProps {
  icon: ReactNode;
  name: string;
  url: string;
}

const SocialCard = ({ icon, name, url }: SocialCardProps) => {
  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-full flex-col items-center justify-center p-6 sm:p-8 ${glassCardClassName}`}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center text-3xl text-accent transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-4xl">
          {icon}
        </div>
        <h3 className="text-center text-base font-semibold text-white transition-colors duration-300 group-hover:text-accent sm:text-lg">
          {name}
        </h3>
      </Link>
    </motion.div>
  );
};

export default SocialCard;
