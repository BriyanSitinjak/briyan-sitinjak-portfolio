'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

import {
  LIST_EXPERIENCES,
  SKILL_CATEGORIES,
  SKILLS,
  countProjectsForSkill,
} from '@/src/constant/constant';
import { staggerContainer } from '@/lib/motion';
import TechCard from '../TechCard';

const TechGrid = () => {
  const projectNames = useMemo(
    () => LIST_EXPERIENCES.map((project) => project.name),
    []
  );

  const grouped = useMemo(
    () =>
      SKILL_CATEGORIES.map((category) => ({
        category,
        skills: SKILLS.filter((skill) => skill.category === category.id).map((skill) => ({
          skill,
          projectCount: countProjectsForSkill(skill.id, projectNames),
        })),
      })).filter((group) => group.skills.length > 0),
    [projectNames]
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {grouped.map(({ category, skills }) => (
        <section key={category.id} aria-labelledby={`skill-group-${category.id}`}>
          <div className="mb-6 text-center sm:mb-8">
            <h2
              id={`skill-group-${category.id}`}
              className="text-xl font-semibold text-white sm:text-2xl"
            >
              {category.label}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/55 sm:text-base">
              {category.description}
            </p>
          </div>
          <motion.div
            variants={staggerContainer(0.03, 0.04)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5"
          >
            {skills.map(({ skill, projectCount }) => (
              <TechCard key={skill.id} tech={skill} projectCount={projectCount} />
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default TechGrid;
