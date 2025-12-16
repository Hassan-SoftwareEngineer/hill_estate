import React from 'react';
import { InvestmentCardProps } from './types';

const InvestmentCard : React.FC <InvestmentCardProps> = ({ 
    title,
    description
 }) => {
  return (
    <div>
      <h3 className='font-bold text-foreground-secondary mb-1'> {title} </h3>   
      <p className='text-foreground-secondary font-medium leading-relaxed opacity-70 text-justify text-sm tracking-tight'> {description} </p>   
    </div>
  )
}

export default InvestmentCard;
