import Link from 'next/link';
import React from 'react';
import { SOCIAL_LINKS } from './constants';

const FooterSocialLinks : React.FC = () => {

  return (
    <div className='flex items-center gap-2'>
      {SOCIAL_LINKS.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <Link
            key={index}
            href={social.href}
            aria-label={social.label}
            className='footer-social-icon flex-center'
          >
            <IconComponent className='text-foreground-primary hover:text-surface-primary' size={16} />
          </Link>
        );
      })}
    </div>
  );
}

export default FooterSocialLinks;