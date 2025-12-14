import React from 'react';
import { motion } from 'framer-motion';
import { LIST_TECH_MASTERED } from '@/src/constant/constant';

const ServicesFooter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 sm:mt-16 md:mt-20 text-center"
    >
      <p className="text-sm sm:text-base text-white/50">
        <span className="text-accent font-semibold">{LIST_TECH_MASTERED.length}</span>{' '}
        technologies mastered
      </p>
    </motion.div>
  );
};

export default ServicesFooter;

