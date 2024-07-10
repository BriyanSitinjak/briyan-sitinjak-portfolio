'use client';

import React from 'react';
import CountUp from 'react-countup';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import profilePicture from '@/src/assets/briyan_sitinjak_photo.png';

interface IStatsData {
  id: string;
  num: number;
  text: string;
}

const Stats = () => {
  const STATS_DATA: IStatsData[] = [
    {
      id: 'years_experience',
      num: 4,
      text: 'Years of Experience'
    },
    {
      id: 'project_completed',
      num: 20,
      text: 'Projects Completed'
    },
    {
      id: 'tech_mastered',
      num: 9,
      text: 'Technologies Mastered'
    },
    {
      id: 'code_commit',
      num: 1433,
      text: 'Code Commits'
    }
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto testing">
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
      <div className="container flex justify-center">
        <Carousel
          opts={{
            align: 'center'
          }}
          className="w-[50%] h-[48vh] my-8 testing"
        >
          <CarouselContent>
            {STATS_DATA.map((data, idx) => {
              return (
                <CarouselItem className="mx-4" key={idx}>
                  <div className="container">
                  <Image
          src={profilePicture}
          priority
          quality={100}
          width={150}
          height={150}
          alt="Briyan Sitinjak Photo"
          className="object-contain"
        />
                  </div>
                  {/* <Card>
                    <CardHeader>
                      <CardTitle>{data.text}</CardTitle>
                      <CardDescription>Bala bala bala bala</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Oi oi oi oi oi oi</p>
                    </CardContent>
                    <CardFooter>
                      <p>ah ah ah ah ah </p>
                    </CardFooter>
                  </Card> */}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Stats;
