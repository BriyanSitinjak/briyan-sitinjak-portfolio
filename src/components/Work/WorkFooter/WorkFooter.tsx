'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WorkFooterProps {
  count: number;
}

const WorkFooter: React.FC<WorkFooterProps> = ({ count }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 text-center sm:mt-16 md:mt-20"
    >
      <p className="text-sm text-white/50 sm:text-base">
        Showing <span className="font-semibold text-accent">{count}</span> projects
      </p>
    </motion.div>
  );
};

export default WorkFooter;
