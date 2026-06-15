'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePicture from '@/src/assets/briyan_sitinjak_photo.png';

const Photo = () => {
  return (
    <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] xl:h-[400px] xl:w-[400px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
        className="absolute inset-4 mix-blend-lighten"
      >
        <Image
          src={profilePicture}
          priority
          quality={100}
          fill
          alt="Briyan Sitinjak Photo"
          className="object-contain"
        />
      </motion.div>
      <motion.svg
        className="absolute inset-0 h-full w-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#3F75BB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
