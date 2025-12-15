'use client';

import CountUp from 'react-countup';
import React, { useState } from 'react';
import { STATS_DATA } from '@/constant/constant';

const Stats = () => {
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
    </section>
  );
};

export default Stats;
