import React from 'react';
import { motion } from 'framer-motion';
import { LIST_EXPERIENCES } from '@/src/constant/constant';

const WorkFooter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 sm:mt-16 md:mt-20 text-center"
    >
      <p className="text-sm sm:text-base text-white/50">
        Showing <span className="text-accent font-semibold">{LIST_EXPERIENCES.length}</span>{' '}
        projects
      </p>
    </motion.div>
  );
};

export default WorkFooter;

