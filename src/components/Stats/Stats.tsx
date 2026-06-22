'use client';

import CountUp from 'react-countup';
import React from 'react';
import { STATS_DATA } from '@/src/constant/constant';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-10 xl:grid-cols-4 xl:gap-6">
      {STATS_DATA.map((data, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-2 text-center xl:flex-row xl:items-baseline xl:gap-4 xl:text-left"
        >
          <CountUp
            end={data.num}
            duration={4}
            delay={1}
            className="text-3xl font-extrabold tabular-nums text-white md:text-4xl xl:text-5xl"
          />
          <p className="max-w-[9rem] text-sm leading-snug text-white/60 xl:max-w-none xl:text-base">
            {data.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
