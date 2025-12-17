import Image from 'next/image';
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FOOTER_CONTACTS } from './constants';

const FooterContacts : React.FC = () => {
  return (
    <div className='flex items-center gap-6'>
        {
            FOOTER_CONTACTS.map((item, index : number) => (
                <div key={index} className={`flex items-center gap-3 ${index === 2 ? 'ml-12' : ''}`}>
          <div className='w-8 h-8 bg-transparent border border-foreground-primary rounded-full flex-center'>
            {index === 2 ? (
              <IoLocationSharp className='text-foreground-primary' size={16} />
            ) : (
              <Image src={item.Icon} alt={item.title} width={16} height={16} />
            )}
          </div>
          <div>
            <h4 className='footer-title'>{item.title}</h4>
            <p className='text-sm text-foreground-primary opacity-80 mt-0.5'>{item.contact}</p>
          </div>
        </div>
            ))
        }
        </div>
  );
}

export default FooterContacts;
