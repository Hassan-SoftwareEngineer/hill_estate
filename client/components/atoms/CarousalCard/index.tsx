import React from 'react';
import { CarousalCardProps } from './types';

const CarousalCard : React.FC <CarousalCardProps> = ({
    title,
    isBorder = false
}) => {
  return (
    <div className={`py-0.5 px-1.5 md:py-2 md:px-6 bg-surface-secondary rounded-b-lg text-center ${isBorder ? 'border border-gray-300 w-[95%] md:w-[70%] mx-auto' : ''}`}>
        <p className="text-xs md:text-base font-semibold text-foreground-primary leading-tight">{title}</p>
    </div>
  )
}

export default CarousalCard;
