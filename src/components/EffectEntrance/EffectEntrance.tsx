'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEntrance } from '@/src/context/EntranceContext';

import StairsEffect from '../StairsEffect';

const EffectEntrance = () => {
  const pathname = usePathname();
  const { setEntranceComplete } = useEntrance();

  useEffect(() => {
    // Reset entrance state on route change
    setEntranceComplete(false);

    // Calculate total animation time: delay (1s) + duration (0.4s) = 1.4s
    const animationDuration = 1400;
    const timer = setTimeout(() => {
      setEntranceComplete(true);
    }, animationDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, setEntranceComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <StairsEffect />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default EffectEntrance;
