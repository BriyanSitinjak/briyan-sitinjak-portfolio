import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { IExperiencesData } from '@/src/constant/type';

interface ProjectCardProps {
  project: IExperiencesData;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.img}
          alt={project.altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.link && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        {!project.link && (
          <span className="inline-block mt-3 text-xs text-white/50 italic">
            Link not available
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

