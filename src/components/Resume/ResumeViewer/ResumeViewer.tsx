'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { CV_URL } from '@/constant/constant';

const ResumeViewer: React.FC = () => {
  const handleDownload = () => {
    window.open(CV_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 sm:p-12 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <FiDownload className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
              Curriculum Vitae
            </h2>
            <p className="text-white/70 mb-8">
              View or download my latest ATS CV (PDF)
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 min-w-[200px]"
              onClick={handleDownload}
            >
              <FiExternalLink className="text-xl" />
              <span>View CV</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 min-w-[200px]"
              onClick={handleDownload}
            >
              <FiDownload className="text-xl" />
              <span>Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeViewer;

