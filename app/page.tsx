'use client';

import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import { HOME_HEADING_INFO } from '@/src/constant/constant';
import { openCV } from '@/lib/cv';

import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Socials from '@/components/Socials';

const HomePage = () => {
  return (
    <section className="flex min-h-[calc(100dvh-7rem)] flex-col justify-center py-10 xl:py-16">
      <div className="page-shell">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="order-2 text-center xl:order-1 xl:text-left">
            <p className="mb-3 text-lg text-white/70">
              {HOME_HEADING_INFO.headingText}{' '}
              <span className="text-white">{HOME_HEADING_INFO.name}</span>
            </p>
            <h1 className="h1 mb-6 text-balance text-accent">{HOME_HEADING_INFO.role}</h1>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 xl:mx-0">
              {HOME_HEADING_INFO.description}
            </p>
            <div className="flex flex-col items-center gap-6 sm:flex-row xl:items-start">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={openCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Socials
                containerStyles="flex gap-4"
                iconStytle="w-10 h-10 border border-accent/60 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              />
            </div>
          </div>
          <div className="order-1 flex justify-center xl:order-2 xl:justify-end">
            <Photo />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 xl:mt-20 xl:pt-12">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
