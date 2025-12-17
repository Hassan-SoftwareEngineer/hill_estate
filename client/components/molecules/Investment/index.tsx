import InvestmentCard from '@/components/atoms/InvestmentCard';
import React from 'react';
import { INVESTMENT } from './constants';

const Investment : React.FC = () => {
  return (
    <section>
      <h3 className='font-semibold text-foreground-personalized my-3 md:my-2'> Why invest in this property? </h3>   
      <h1 className='text-2xl font-bold text-foreground-secondary mb-4'> What Makes This Property a Strong Investment </h1>
      <div className='grid grid-co1s-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 2xl:gap-12'>
        <div className='space-y-3'>
          {INVESTMENT.slice(0, 3).map((investment, index) => (
            <InvestmentCard key={index} title={investment.title} description={investment.description} />
          ))}
        </div>
        <div className='space-y-4'>
          {INVESTMENT.slice(3, 6).map((investment, index) => (
            <InvestmentCard key={index} title={investment.title} description={investment.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Investment;
