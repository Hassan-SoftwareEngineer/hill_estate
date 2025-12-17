"use client";
import { wallet } from '@/assets/icons';
import { useWallet } from '@/hooks/useWallet';
import Image from 'next/image';
import React, { useState } from 'react';
import WalletModal from '../WalletModal';

const WalletButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
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
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image src={wallet} alt="Wallet" width={20} height={20} />
        <span className="text-sm text-foreground-primary">
          {isLoading ? '...' : isConnected && walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
        </span>
      </button>

      {toast && (
        <div className={`fixed top-4 right-4 p-3 rounded-lg shadow-lg text-white text-sm z-50 ${
          toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {toast.message}
        </div>
      )}

      <WalletModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onConnect={async () => {
          try {
            await connectWallet();
            setIsModalOpen(false);
            setToast({ message: 'Wallet connected successfully!', type: 'success' });
            setTimeout(() => setToast(null), 3000);
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to connect wallet';
            setToast({ message, type: 'error' });
            setTimeout(() => setToast(null), 3000);
          }
        }}
        onDisconnect={async () => {
          try {
            await disconnectWallet();
            setIsModalOpen(false);
            setToast({ message: 'Wallet disconnected successfully!', type: 'success' });
            setTimeout(() => setToast(null), 3000);
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to disconnect wallet';
            setToast({ message, type: 'error' });
            setTimeout(() => setToast(null), 3000);
          }
        }}
      />
    </>
  );
};

export default WalletButton;