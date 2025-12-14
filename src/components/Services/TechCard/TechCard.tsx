import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ITechMastered } from '@/src/constant/type';

interface TechCardProps {
  tech: ITechMastered;
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
      className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
        <Image
          src={tech.icon}
          alt={tech.altText}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 80px, 96px"
        />
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent transition-colors duration-300 text-center">
        {tech.name}
      </h3>
    </motion.div>
  );
};

export default TechCard;

