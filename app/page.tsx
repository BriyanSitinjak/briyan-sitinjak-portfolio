import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import { HOME_HEADING_INFO } from '@/src/constant/constant';

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">{HOME_HEADING_INFO.role}</span>
            <h1 className="h1 mb-6">
              {HOME_HEADING_INFO.headingText} <br />
              <span className="text-accent">{HOME_HEADING_INFO.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{HOME_HEADING_INFO.description}</p>
            <div className="flex flex-col  xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
