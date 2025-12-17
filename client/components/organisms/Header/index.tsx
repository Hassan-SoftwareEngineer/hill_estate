import { notification, separator } from '@/assets/icons';
import WalletButton from '@/components/atoms/WalletButton';
import Image from 'next/image';
import React from 'react';

const Header : React.FC = () => {
  return (
    <header className='h-24 w-full bg-surface-accent'>
      <nav className='max-width-sm w-full h-full flex items-center justify-end gap-3'>
        <WalletButton />
        <Image src={separator} alt="separator" width={0.5} height={10} />
        <Image src={notification} alt="notification" width={20} height={8}  />
      </nav> 
    </header>
  )
}

export default Header;
