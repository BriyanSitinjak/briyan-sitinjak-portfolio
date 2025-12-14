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

const ServicesHeader: React.FC = () => {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="mb-8 sm:mb-12 md:mb-16 text-center"
    >
      <motion.h1
        className="h1 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technologies <span className="text-accent">Mastered</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A comprehensive collection of technologies and tools I&apos;ve mastered throughout my
        career, enabling me to build modern and scalable web applications.
      </motion.p>
    </motion.div>
  );
};

export default ServicesHeader;

