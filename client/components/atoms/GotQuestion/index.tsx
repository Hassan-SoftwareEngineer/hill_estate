import Image from 'next/image';
import React from 'react';
import { CONTACT_DETAILS } from './constants';

const GotQuestion : React.FC = () => {
  return (
    <div className='p-4 md:p-6 rounded-lg' style={{background: 'linear-gradient(to right, #932A8E, #3A5DAC)'}}>
      <h3 className='uppercase text-lg font-semibold text-foreground-primary'> Got a Question? </h3>
      <p className='text-sm font-semibold text-foreground-primary mt-0.5 mb-1.5'> We’re here to help </p>
      {
        CONTACT_DETAILS.map((contact, index) => (
          <div key={index} className='flex items-center gap-2 mt-3'>
            <Image src={contact.Icon} alt={contact.contact} width={20} height={20} />
            <p className='text-sm font-semibold text-foreground-primary'> {contact.contact} </p>
          </div>
        ))
      }
      <h3 className='text-sm font-semibold text-foreground-primary mt-8'> WhatsApp or call our toll-free number: </h3>
    </div>
  )
}

export default GotQuestion;
