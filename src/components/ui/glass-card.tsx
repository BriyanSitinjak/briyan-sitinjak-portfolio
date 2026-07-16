import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const glassCardClassName =
  'rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return <div className={cn(glassCardClassName, className)}>{children}</div>;
};

export default GlassCard;
