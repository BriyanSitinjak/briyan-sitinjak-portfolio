import Image from 'next/image';
import { motion } from 'framer-motion';

import { ITechMastered } from '@/src/constant/type';
import { fadeScaleItem } from '@/lib/motion';
import { glassCardClassName } from '@/components/ui/glass-card';

interface TechCardProps {
  tech: ITechMastered;
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <motion.div
      variants={fadeScaleItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 ${glassCardClassName}`}
    >
      <div className="relative mb-4 h-20 w-20 sm:h-24 sm:w-24">
        <Image
          src={tech.icon}
          alt={tech.altText}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 80px, 96px"
        />
      </div>
      <h3 className="text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:text-accent sm:text-base">
        {tech.name}
      </h3>
    </motion.div>
  );
};

export default TechCard;
