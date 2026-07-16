'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import profilePicture from '@/src/assets/briyan_sitinjak_photo.webp';

const Photo = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] xl:h-[400px] xl:w-[400px]">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35, ease: 'easeOut' }}
        className="absolute inset-4 mix-blend-lighten"
      >
        <Image
          src={profilePicture}
          priority
          quality={80}
          fill
          alt="Briyan Sitinjak Photo"
          className="object-contain"
          sizes="(max-width: 1280px) 320px, 400px"
        />
      </motion.div>
      <svg
        className={`absolute inset-0 h-full w-full ${shouldReduceMotion ? '' : 'animate-photo-orbit'}`}
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="#3F75BB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="15 120 25 25"
        />
      </svg>
    </div>
  );
};

export default Photo;
