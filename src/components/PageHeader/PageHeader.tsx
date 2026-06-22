'use client';

import React from 'react';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

interface PageHeaderProps {
  titleBefore: string;
  titleHighlight: string;
  description: string;
  compact?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  titleBefore,
  titleHighlight,
  description,
  compact = false,
}) => {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className={`text-center ${compact ? 'mb-8 sm:mb-12' : 'mb-8 sm:mb-12 md:mb-16'}`}
    >
      <motion.h1
        className="h1 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {titleBefore} <span className="text-accent">{titleHighlight}</span>
      </motion.h1>
      <motion.p
        className={`mx-auto max-w-2xl text-white/70 ${
          compact ? 'text-base sm:text-lg' : 'text-base sm:text-lg md:text-xl'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default PageHeader;
