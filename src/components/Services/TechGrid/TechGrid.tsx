import React from 'react';
import { motion } from 'framer-motion';
import { LIST_TECH_MASTERED } from '@/src/constant/constant';
import TechCard from '../TechCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const TechGrid: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
    >
      {LIST_TECH_MASTERED.map((tech) => (
        <TechCard key={tech.id || tech.name} tech={tech} />
      ))}
    </motion.div>
  );
};

export default TechGrid;

