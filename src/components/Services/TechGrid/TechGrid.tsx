import { motion } from 'framer-motion';

import { LIST_TECH_MASTERED } from '@/src/constant/constant';
import { staggerContainer } from '@/lib/motion';
import TechCard from '../TechCard';

const TechGrid = () => {
  return (
    <motion.div
      variants={staggerContainer(0.03, 0.04)}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-8"
    >
      {LIST_TECH_MASTERED.map((tech) => (
        <TechCard key={tech.id || tech.name} tech={tech} />
      ))}
    </motion.div>
  );
};

export default TechGrid;
