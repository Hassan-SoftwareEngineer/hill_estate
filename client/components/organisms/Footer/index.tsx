import FooterSocialLinks from '@/components/atoms/FooterSocialLinks';
import FooterContacts from '@/components/molecules/FooterContacts';
import FooterLinks from '@/components/molecules/FooterLinks';
import React from 'react';
import { FOOTER_LINKS } from './constants';

const Footer : React.FC = () => {
  return (
    <footer className='bg-surface-primary flex-center pt-6 md:pt-8 lg:pt-10 xl:pt-16'>
      <div className='max-width-xs flex flex-col gap-4 md:gap-6 xl:gap-8'>
        <div>
          <p className='footer-title mb-2.5'> At Hill Estate, every real estate project is divided into clearly defined construction rounds, each linked </p>
        <p className='footer-title text-center'> to measurable development milestones. </p>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-6 xl:gap-8 md:justify-center max-md:items-center'>
          {
            FOOTER_LINKS.map((item, index : number) => (
              <FooterLinks
              key={index}
              {...item}
              />
            ))
          }
        </div>
            <FooterContacts />
        <div className='flex justify-center'>
          <FooterSocialLinks />
        </div>
        <div className='border-t border-border-primary p-4'>
          <p className='text-xs text-foreground-primary text-center'>  © Atomprop | Privacy Policy | Terms of Use </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
