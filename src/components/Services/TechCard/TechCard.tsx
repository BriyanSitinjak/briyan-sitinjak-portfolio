'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ISkill } from '@/src/constant/type';
import { fadeScaleItem } from '@/lib/motion';
import { glassCardClassName } from '@/components/ui/glass-card';

interface TechCardProps {
  tech: ISkill;
  projectCount: number;
}

const SkillIcon = ({ tech }: { tech: ISkill }) => {
  if (tech.iconKind === 'component') {
    const Icon = tech.icon;
    return (
      <Icon
        className="h-12 w-12 text-white transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
        aria-hidden
      />
    );
  }

  return (
    <Image
      src={tech.icon}
      alt={tech.altText}
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-110"
      sizes="(max-width: 768px) 64px, 80px"
    />
  );
};

const TechCard = ({ tech, projectCount }: TechCardProps) => {
  const hasProjects = projectCount > 0;

  const content = (
    <>
      <div
        className={`relative mb-4 flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 ${
          tech.iconKind === 'component' ? '' : ''
        }`}
      >
        <SkillIcon tech={tech} />
      </div>
      <h3 className="text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:text-accent sm:text-base">
        {tech.name}
      </h3>
      <p className="mt-2 text-center text-xs text-white/50">
        {hasProjects ? (
          <>
            <span className="text-accent">{projectCount}</span>{' '}
            {projectCount === 1 ? 'project' : 'projects'}
          </>
        ) : (
          'In my toolkit'
        )}
      </p>
      {hasProjects ? (
        <p className="mt-2 text-center text-[11px] text-accent/80 opacity-0 transition-opacity group-hover:opacity-100">
          View related work →
        </p>
      ) : null}
    </>
  );

  if (!hasProjects) {
    return (
      <motion.div
        variants={fadeScaleItem}
        className={`group relative flex flex-col items-center justify-center p-5 sm:p-6 ${glassCardClassName}`}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeScaleItem} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
      <Link
        href={`/work?skill=${tech.id}`}
        className={`group relative flex h-full flex-col items-center justify-center p-5 sm:p-6 ${glassCardClassName}`}
      >
        {content}
      </Link>
    </motion.div>
  );
};

export default TechCard;
