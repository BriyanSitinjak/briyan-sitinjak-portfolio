'use client';

import CountUp from 'react-countup';
import React, { useState } from 'react';

import TechMastered from '../TechMastered';
import { IStatsData } from '@/src/constant/type';
import ProjectCompleted from '../ProjectCompleted';

const Stats = () => {
  const STATS_DATA: IStatsData[] = [
    {
      num: 4,
      text: 'Years of Experience'
    },
    {
      id: 'project_completed',
      num: 22,
      text: 'Projects Completed'
    },
    {
      id: 'tech_mastered',
      num: 24,
      text: 'Technologies Mastered'
    },
    {
      num: 1433,
      text: 'Code Commits'
    }
  ];

  const [activeCol, setActiveCol] = useState<string>('');

  const goToSection = (link: string) => {
    return setActiveCol(link);
  };

  return (
    <section className="py-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none:">
          {STATS_DATA.map((data, idx) => {
            return (
              <div
                className={`flex-1 flex gap-4 items-center justify-center xl:justify-start ${
                  data.id && 'hover:bg-accent rounded-lg cursor-pointer'
                } ${activeCol === data.id && 'bg-accent'}`}
                key={idx}
                onClick={() => data.id && goToSection(data.id)}
              >
                <CountUp
                  end={data.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold px-4 py-2"
                />
                <p
                  className={`${
                    data.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container flex justify-center h-[48vh] mb-10 mt-4">
        {activeCol === 'project_completed' ? (
          <ProjectCompleted />
        ) : activeCol === 'tech_mastered' ? (
          <TechMastered />
        ) : (
          <p className="mt-16">Click one of the four statuses above</p>
        )}
      </div>
    </section>
  );
};

export default Stats;
