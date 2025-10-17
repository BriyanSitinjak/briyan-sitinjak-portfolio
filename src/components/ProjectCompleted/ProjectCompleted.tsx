import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious
} from '../ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

import { LIST_EXPERIENCES } from '@/src/constant/constant';

const ProjectCompleted = () => {
  const goToExperience = (link: string) => {
    return window.open(link);
  };

  return (
    <Carousel
      opts={{
        align: 'center'
      }}
      className="w-[80%] xl:w-full h-max my-8"
    >
      <CarouselContent>
        {LIST_EXPERIENCES.map((data, idx) => {
          return (
            <CarouselItem className="mx-4 xl:basis-1/2 sm:basis-1/4" key={idx}>
              <div className="container p-1">
                <Card className="bg-primary h-[48vh]">
                  <CardHeader>
                    <CardTitle
                      onClick={() => goToExperience(data.link)}
                      className="text-accent cursor-pointer"
                    >
                      {data.name}
                    </CardTitle>
                    <CardDescription className="text-white/80 xl:text-justify">{data.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      onClick={() => goToExperience(data.link)}
                      src={data.img}
                      quality={100}
                      priority
                      width={1000}
                      height={700}
                      alt={data.altText}
                      className="object-contain cursor-pointer"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCompleted;
