'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="w-full h-full relative testing">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src={'/logo_briyan_sitinjak.jpg'}
            priority
            quality={100}
            fill
            alt="Briyan Sitinjak Photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
