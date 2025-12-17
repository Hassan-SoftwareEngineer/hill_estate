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
   <section className="w-full">
    <h1 className="text-2xl md:text-4xl font-bold text-center bg-linear-to-r from-foreground-personalized to-foreground-accent bg-clip-text text-transparent my-2 md:my-3 lg:my-4">
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
                className="w-full h-64 md:h-120 object-cover rounded-xl"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col">
                <CarousalCard title={slide.title} isBorder={false} />
                <CarousalCard title={slide.subtitle} isBorder={true} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 -mt-4 md:-mt-6 relative z-10">
          <button 
            onClick={() => canScrollPrev && api?.scrollPrev()}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 ${!canScrollPrev ? 'opacity-80' : 'opacity-100'}`}
          >
            <MdChevronLeft className="text-white text-lg md:text-2xl" />
          </button>
          <button 
            onClick={() => canScrollNext && api?.scrollNext()}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 ${!canScrollNext ? 'opacity-80' : 'opacity-100'}`}
          >
            <MdChevronRight className="text-white text-lg md:text-2xl" />
          </button>
        </div>
      </Carousel>
   </section>
  )
}

export default Hero;