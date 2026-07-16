'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

import { CONTACT_MAILTO, SOCIAL_LINKS } from '@/src/constant/constant';
import { staggerContainer } from '@/lib/motion';
import { SOCIAL_ICONS, type SocialName } from '@/components/Socials/socialIcons';
import SocialCard from '../SocialCard';

const CONTACT_LINK_ORDER: SocialName[] = ['LinkedIn', 'GitHub', 'GitLab', 'Medium'];

const CONTACT_LINKS = [
  {
    name: 'Email',
    url: CONTACT_MAILTO,
    icon: <FaEnvelope />,
  },
  ...CONTACT_LINK_ORDER.flatMap((name) => {
    const link = SOCIAL_LINKS.find((item) => item.name === name);
    if (!link) return [];
    return [
      {
        name: link.name,
        url: link.url,
        icon: SOCIAL_ICONS[name],
      },
    ];
  }),
];

const SocialGrid = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="visible"
      className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5"
    >
      {CONTACT_LINKS.map((social) => (
        <SocialCard
          key={social.name}
          icon={social.icon}
          name={social.name}
          url={social.url}
        />
      ))}
    </motion.div>
  );
};

export default SocialGrid;
