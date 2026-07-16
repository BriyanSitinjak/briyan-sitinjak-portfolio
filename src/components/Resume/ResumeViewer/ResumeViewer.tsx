'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import { openCV } from '@/lib/cv';
import { glassCardClassName } from '@/components/ui/glass-card';

const ResumeViewer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex min-h-[60vh] flex-col items-center justify-center"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className={`${glassCardClassName} p-8 text-center sm:p-12`}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/20">
              <FiDownload className="h-12 w-12 text-accent" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
              Curriculum Vitae
            </h2>
            <p className="mb-8 text-white/70">View or download my latest ATS CV (PDF)</p>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="outline"
              size="lg"
              className="flex min-w-[200px] items-center gap-2"
              onClick={openCV}
            >
              <FiExternalLink className="text-xl" />
              <span>View CV</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex min-w-[200px] items-center gap-2"
              onClick={openCV}
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
