'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import { HOME_HEADING_INFO } from '@/src/constant/constant';

import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Socials from '@/components/Socials';

const HomePage = () => {
  const downloadCV = () => {
    return window.open(
      'https://drive.google.com/file/d/1sE87gq_dtY-_fN9r9vUtlg7BUnySK-og/view?usp=sharing'
    );
  };

  return (
    <section className="xl:h-[60vh] h-full">
      <div className="container mx-auto h-full mb-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{HOME_HEADING_INFO.role}</span>
            <h1 className="h1 mb-6">
              {HOME_HEADING_INFO.headingText} <br />
              <span className="text-accent">{HOME_HEADING_INFO.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{HOME_HEADING_INFO.description}</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => downloadCV()}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStytle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <div className="container">
        <Stats />
      </div>
    </section>
  );
};

export default HomePage;
