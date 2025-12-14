'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEntrance } from '@/src/context/EntranceContext';

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

const WorkHeader: React.FC = () => {
  const { isEntranceComplete } = useEntrance();

  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate={isEntranceComplete ? 'visible' : 'hidden'}
      className="mb-8 sm:mb-12 md:mb-16 text-center"
    >
      <motion.h1
        className="h1 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My <span className="text-accent">Work</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A collection of projects I&apos;ve worked on, showcasing my expertise in web
        development and modern technologies.
      </motion.p>
    </motion.div>
  );
};

export default WorkHeader;
