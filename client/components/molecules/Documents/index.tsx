import DocumentCard from '@/components/atoms/DocumentCard';
import React from 'react';
import { DOCUMENTS } from './constants';

const Documents : React.FC = () => {
  return (
    <section className='documents'>
      <h1 className='text-xl font-medium text-foreground-primary mb-4'>   Documents </h1>
      {
        DOCUMENTS.map((doc, index) => (
          <div key={index} className='my-2'>
            <DocumentCard title={doc.title} />
          </div>
        ))
      }
    </section>
  )
}

export default Documents;
