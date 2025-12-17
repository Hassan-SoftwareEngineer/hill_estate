import Link from 'next/link';
import React from 'react';
import { FooterLinkProps } from './types';

const FooterLinks : React.FC <FooterLinkProps> = ({
     link,
     path
 }) => {
  return (
    <Link 
                href={path}
                className='text-sm footer-title hover:text-foreground-accent transition-colors'
              >
                {link}
              </Link>
  )
}

export default FooterLinks;
