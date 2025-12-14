import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SocialCardProps {
  icon: React.ReactNode;
  name: string;
  url: string;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const SocialCard: React.FC<SocialCardProps> = ({ icon, name, url, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
      className="group"
    >
      <Link
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 h-full"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center text-3xl sm:text-4xl text-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300 text-center">
          {name}
        </h3>
      </Link>
    </motion.div>
  );
};

export default SocialCard;

