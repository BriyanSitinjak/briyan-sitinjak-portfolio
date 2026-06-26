'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IExperiencesData } from '@/src/constant/type';
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

interface WorkGridProps {
  projects: IExperiencesData[];
  filterKey: string;
}

const WorkGrid: React.FC<WorkGridProps> = ({ projects, filterKey }) => {
  return (
    <motion.div
      key={filterKey}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={`${project.name}-${index}`} project={project} />
      ))}
    </motion.div>
  );
};

export default WorkGrid;
