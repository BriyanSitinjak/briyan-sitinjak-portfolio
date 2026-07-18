'use client';

import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ExpandableTextProps {
  children: ReactNode;
  className?: string;
  /** Lines shown before expand. Default 3. */
  clampLines?: 2 | 3 | 4;
  moreLabel?: string;
  lessLabel?: string;
}

const clampClass: Record<NonNullable<ExpandableTextProps['clampLines']>, string> = {
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
};

const ExpandableText = ({
  children,
  className,
  clampLines = 3,
  moreLabel = 'Read more',
  lessLabel = 'Show less',
}: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={cn(
          'text-sm leading-relaxed text-white/70 sm:text-base',
          !expanded && clampClass[clampLines],
          className
        )}
      >
        {children}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        aria-expanded={expanded}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  );
};

export default ExpandableText;
