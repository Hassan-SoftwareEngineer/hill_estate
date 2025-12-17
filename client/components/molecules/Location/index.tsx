import { location } from '@/assets/icons';
import { map } from '@/assets/images';
import GotQuestion from '@/components/atoms/GotQuestion';
import Image from 'next/image';
import React from 'react';

const Location : React.FC = () => {
  return (
    <section className='pb-4 md:pb-6 lg:pb-8'>
      <h1 className='text-xl font-bold text-foreground-secondary mb-2'> Location </h1>
      <div className='flex gap-1 items-center mb-4'>
        <Image src={location} alt='Location' height={15} width={15} />
        <p className='text-xs font-bold text-foreground-secondary'> Hill States lorem ipsum dolor sit amet </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <Image src={map} alt='Map' height={250} className='w-full h-64 object-cover rounded-lg' />
        <div className='h-64'>
          <GotQuestion />
        </div>
      </div>
    </section>
  )
}

export default Location;
