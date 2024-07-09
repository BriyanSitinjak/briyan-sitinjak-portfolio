'use client';

import React from 'react';
import CountUp from 'react-countup';

interface IStatsData {
  num: number;
  text: string;
}

const Stats = () => {
  const STATS_DATA: IStatsData[] = [
    {
      num: 4,
      text: 'Years of Experience'
    },
    {
      num: 20,
      text: 'Projects Completed'
    },
    {
      num: 9,
      text: 'Technologies Mastered'
    },
    {
      num: 1433,
      text: 'Code Commits'
    }
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none:">
          {STATS_DATA.map((data, idx) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={idx}
              >
                <CountUp
                  end={data.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
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
