'use client';

import { motion } from 'framer-motion';

interface SectionFooterProps {
  count: number;
  label: string;
}

const SectionFooter = ({ count, label }: SectionFooterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 text-center sm:mt-16 md:mt-20"
    >
      <p className="text-sm text-white/50 sm:text-base">
        <span className="font-semibold text-accent">{count}</span> {label}
      </p>
    </motion.div>
  );
};

export default SectionFooter;
