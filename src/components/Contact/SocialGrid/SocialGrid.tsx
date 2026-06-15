'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import SocialCard from '../SocialCard';

const SOCIAL_LINKS = [
  {
    name: 'Email',
    url: 'mailto:Imanbriyan@gmail.com?subject=Remote%20opportunity%20%E2%80%94%20Briyan%20Sitinjak',
    icon: <FaEnvelope />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/briyan-sitinjak/',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Briyan-NS',
    icon: <FaGithub />,
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/briyan_sitinjak',
    icon: <FaGitlab />,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@imanbriyan',
    icon: <FaMedium />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const SocialGrid: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto"
    >
      {SOCIAL_LINKS.map((social, index) => (
        <SocialCard
          key={social.name}
          icon={social.icon}
          name={social.name}
          url={social.url}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default SocialGrid;
