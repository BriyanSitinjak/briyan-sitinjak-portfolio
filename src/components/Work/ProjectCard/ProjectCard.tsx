'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import ExpandableText from '@/components/ExpandableText';
import { IExperiencesData, SkillId } from '@/src/constant/type';
import { fadeUpItem } from '@/lib/motion';
import { glassCardClassName } from '@/components/ui/glass-card';
import SkillChips from '../SkillChips';
import ProjectStatusBadges from '../ProjectStatusBadges';

interface ProjectCardProps {
  project: IExperiencesData;
  activeSkill?: SkillId | null;
}

const ProjectCard = ({ project, activeSkill = null }: ProjectCardProps) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden ${glassCardClassName}`}
    >
      <ProjectStatusBadges status={project.status} deployment={project.deployment} />
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.img}
          alt={project.altText}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {project.link ? (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={handleClick}
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <span>View Project</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl">
          {project.name}
        </h3>
        <ExpandableText>{project.description}</ExpandableText>
        <div className="mt-4">
          <SkillChips projectName={project.name} activeSkill={activeSkill} />
        </div>
        {!project.link ? (
          <span className="mt-3 inline-block text-xs italic text-white/50">
            Link not available
          </span>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
