'use client';

import { motion } from 'framer-motion';

import { IExperiencesData, SkillId } from '@/src/constant/type';
import { staggerContainer } from '@/lib/motion';
import ProjectCard from '../ProjectCard';

interface WorkGridProps {
  projects: IExperiencesData[];
  filterKey: string;
  activeSkill?: SkillId | null;
}

const WorkGrid = ({ projects, filterKey, activeSkill = null }: WorkGridProps) => {
  return (
    <motion.div
      key={filterKey}
      variants={staggerContainer()}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.name}-${index}`}
          project={project}
          activeSkill={activeSkill}
        />
      ))}
    </motion.div>
  );
};

export default WorkGrid;
