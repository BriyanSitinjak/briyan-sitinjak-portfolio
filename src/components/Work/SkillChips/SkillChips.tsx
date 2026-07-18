'use client';

import Link from 'next/link';

import { getProjectStack, getSkillById } from '@/src/constant/constant';
import type { SkillId } from '@/src/constant/type';
import { cn } from '@/lib/utils';

interface SkillChipsProps {
  projectName: string;
  activeSkill?: SkillId | null;
  className?: string;
}

const SkillChips = ({
  projectName,
  activeSkill = null,
  className,
}: SkillChipsProps) => {
  const skills = getProjectStack(projectName)
    .map((id) => getSkillById(id))
    .filter(Boolean);

  if (skills.length === 0) {
    return null;
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {skills.map((skill) => {
        if (!skill) return null;
        const isActive = activeSkill === skill.id;

        return (
          <Link
            key={skill.id}
            href={`/work?skill=${skill.id}`}
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors sm:text-xs',
              isActive
                ? 'border-accent bg-accent text-primary'
                : 'border-white/15 bg-white/5 text-white/80 hover:border-accent/60 hover:text-accent'
            )}
          >
            {skill.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SkillChips;
