"use client";
import CarousalCard from '@/components/atoms/CarousalCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from 'next/image';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CAROUSAL_ITEMS } from './constants';

const Hero : React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    
    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }
    
    updateButtons()
    api.on('select', updateButtons)
    
    return () => {
      api.off('select', updateButtons)
    }
  }, [api])
  

  return (
   <section className="w-full pt-6">
    <h1 className="main-heading">
      Hill Estate
    </h1>
    <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {CAROUSAL_ITEMS.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <Image 
                src={slide.image} 
                alt={slide.title}
                width={800}
                height={537}
                className="w-full h-120 object-cover rounded-xl"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col">
                <CarousalCard title={slide.title} isBorder={false} />
                <CarousalCard title={slide.subtitle} isBorder={true} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-3 -mt-4 relative z-10">
          <button 
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            className={`carousal-button flex-center ${!canScrollPrev ? 'opacity-70' : 'opacity-100'}`}
          >
            <MdChevronLeft className="text-white text-3xl" />
          </button>
          <button 
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            className={`carousal-button flex-center ${!canScrollNext ? 'opacity-70' : 'opacity-100'}`}
          >
            <MdChevronRight className="text-white text-3xl" />
          </button>
        </div>
      </Carousel>
   </section>
  )
}

export default Hero;