'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { fadeUpTitle } from '@/lib/motion';

interface PageHeaderProps {
  titleBefore: string;
  titleHighlight: string;
  description: string;
  compact?: boolean;
}

const PageHeader = ({
  titleBefore,
  titleHighlight,
  description,
  compact = false,
}: PageHeaderProps) => {
  const shouldReduceMotion = useReducedMotion();
  const className = `text-center ${compact ? 'mb-8 sm:mb-12' : 'mb-8 sm:mb-12 md:mb-16'}`;

  const content = (
    <>
      <h1 className="h1 mb-4 sm:mb-6">
        {titleBefore} <span className="text-accent">{titleHighlight}</span>
      </h1>
      <p
        className={`mx-auto max-w-2xl text-white/70 ${
          compact ? 'text-base sm:text-lg' : 'text-base sm:text-lg md:text-xl'
        }`}
      >
        {description}
      </p>
    </>
  );

  if (shouldReduceMotion) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      variants={fadeUpTitle}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {content}
    </motion.div>
  );
};

export default PageHeader;
