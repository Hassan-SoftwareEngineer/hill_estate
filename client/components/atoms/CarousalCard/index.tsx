import React from 'react';
import { CarousalCardProps } from './types';

const CarousalCard : React.FC <CarousalCardProps> = ({
    title,
    isBorder = false
}) => {
  return (
    <div className={`py-2 px-6 bg-surface-secondary rounded-b-lg text-center ${isBorder ? 'border border-gray-300 w-[70%] mx-auto' : ''}`}>
        <p className="font-semibold text-foreground-primary">{title}</p>
    </div>
  )
}

export default CarousalCard;
