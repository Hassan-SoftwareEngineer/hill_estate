"use client";
import { wallet } from '@/assets/icons';
import { useWallet } from '@/hooks/useWallet';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'sonner';
import WalletModal from '../WalletModal';

const WalletButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { 
    isConnected, 
    walletAddress,
    isLoading,
    isConnecting, 
    connectWallet, 
    disconnectWallet,
    isDisconnecting,
  } = useWallet();

  const handleWalletClick = () => {
    setIsModalOpen(true);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <button
        onClick={handleWalletClick}
        disabled={isConnecting || isDisconnecting}
        className="flex items-center gap-2 pl-3 py-2 rounded-lg bg-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image src={wallet} alt="Wallet" width={20} height={20} />
        <span className="text-sm text-foreground-primary">
          {isLoading ? '...' : isConnected && walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
        </span>
      </button>



      <WalletModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onConnect={async () => {
          try {
            await connectWallet();
            setIsModalOpen(false);
            toast.success('Connected!');
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to connect wallet';
            toast.error(message);
          }
        }}
        onDisconnect={async () => {
          try {
            await disconnectWallet();
            setIsModalOpen(false);
            toast.success('Disconnected!');
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to disconnect wallet';
            toast.error(message);
          }
        }}
      />
    </>
  );
};

export default WalletButton;