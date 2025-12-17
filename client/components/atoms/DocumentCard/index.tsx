import { document, download, view } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { DocumentCardProps } from './types';

const DocumentCard : React.FC <DocumentCardProps> = ({
  title
}) => {
  return (
    <div className='document-card flex-between-center'>
      <div className='flex gap-2'>
        <Image src={document} alt='Document' width={20} height={10} />
        <h3 className='font-medium max-md:text-xs max-md:mb-1 text-foreground-primary'> {title} </h3>
      </div>
      <div className='md:w-32 w-24 max-md:ml-4 flex-between-center'>
        <h3 className='font-semibold text-foreground-primary opacity-50'> PDF </h3>
        <div className='flex gap-3'>
          <Image src={download} alt="Download" height={25} width={20} />
        <Image src={view} alt="View" height={18} width={18} />
        </div>
      </div>
    </div>
  )
}

export default DocumentCard;
