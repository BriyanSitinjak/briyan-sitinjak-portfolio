import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

import { LIST_TECH_MASTERED } from '@/src/constant/constant';

const TechMastered = () => {
  return (
    <Carousel
      opts={{
        align: 'center'
      }}
      className="w-[80%] xl:w-full my-8"
    >
      <CarouselContent>
        {LIST_TECH_MASTERED.map((tech, idx) => {
          return (
            <CarouselItem className="mx-4 xl:basis-1/2 sm:basis-1/4" key={idx}>
              <Card key={idx}>
                <CardContent>
                  <Image
                    // onClick={() => goToExperience(data.link)}
                    src={tech.icon}
                    quality={100}
                    priority
                    width={120}
                    height={120}
                    alt={'test'}
                    className="object-contain cursor-pointer"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default TechMastered;
