import Image from 'next/image';
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FOOTER_CONTACTS } from './constants';

const FooterContacts : React.FC = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-4 max-md:px-4 max-w-lg'>
        {
            FOOTER_CONTACTS.map((item, index : number) => (
                <div key={index} className={`flex items-center gap-3 ${index === 2 && 'md:ml-12 xl:ml-8 max-md:mb-2'}`}>
          <div className='w-8 h-8 min-w-8 min-h-8 bg-transparent border border-foreground-primary rounded-full flex-center'>
            {index === 2 ? (
              <IoLocationSharp className='text-foreground-primary' size={16} />
            ) : (
              <Image src={item.Icon} alt={item.title} width={16} height={16} />
            )}
          </div>
          <div>
            <h4 className='footer-title text-start'>{item.title}</h4>
            <p className='text-sm text-foreground-primary opacity-80 mt-0.5 whitespace-nowrap'>{item.contact}</p>
          </div>
        </div>
            ))
        }
        </div>
  );
}

export default FooterContacts;
