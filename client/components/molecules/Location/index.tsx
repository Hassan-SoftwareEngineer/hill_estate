import { location } from '@/assets/icons';
import { map } from '@/assets/images';
import GotQuestion from '@/components/atoms/GotQuestion';
import Image from 'next/image';
import React from 'react';

const Location : React.FC = () => {
  return (
    <section className='pb-6 md:pb-8 xl:pb-10'>
      <h1 className='text-xl font-bold text-foreground-secondary mb-2'> Location </h1>
      <div className='flex gap-1 items-center'>
        <Image src={location} alt='Location' height={15} width={15} />
        <p className='text-xs font-bold text-foreground-secondary'> Hill States lorem ipsum dolor sit amet </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4">
        <Image src={map} alt='Map' height={250} />
        <GotQuestion />
      </div>
    </section>
  )
}

export default Location;
