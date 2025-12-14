import React from 'react';
import { motion } from 'framer-motion';
import { LIST_EXPERIENCES } from '@/src/constant/constant';
import ProjectCard from '../ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const WorkGrid: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
    >
      {LIST_EXPERIENCES.map((project, index) => (
        <ProjectCard key={`${project.name}-${index}`} project={project} />
      ))}
    </motion.div>
  );
};

export default WorkGrid;

