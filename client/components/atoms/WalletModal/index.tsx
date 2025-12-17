// components/atoms/WalletModal/index.tsx
import { useWallet } from '@/hooks/useWallet';
import React, { useEffect } from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
  onDisconnect: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onConnect, onDisconnect }) => {
  const { 
    walletAddress, 
    isDisconnecting, 
    isConnected,
    isConnecting,
    isMetaMaskInstalled
  } = useWallet();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-surface-accent/50 flex items-center justify-center z-50 overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="bg-surface-primary border border-border-accent rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground-primary">
            {isConnected ? 'Wallet Details' : 'Connect Wallet'}
          </h2>
          <button
            onClick={onClose}
            className="text-foreground-primary hover:text-foreground-accent cursor-pointer text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {!isConnected ? (
            <div className="text-center pt-4 pb-0">
              <div className="text-4xl mb-4">🔗</div>
              <p className="text-foreground-primary mb-6">
                Connect your wallet to view your tokens
              </p>
              {!isMetaMaskInstalled ? (
                <button
                  onClick={() => window.open('https://metamask.io/download/', '_blank')}
                  className="w-full px-4 py-3 bg-action-secondary text-foreground-primary rounded-lg cursor-pointer font-medium"
                >
                  Install MetaMask
                </button>
              ) : (
                <button
                  onClick={onConnect}
                  disabled={isConnecting}
                  className="w-full px-4 py-3 gradient-primary text-foreground-primary rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">
                  Wallet Address
                </label>
                <div className="bg-surface-accent p-3 rounded border border-border-primary">
                  <span className="text-sm text-foreground-primary font-mono">
                    {walletAddress ? formatAddress(walletAddress) : 'Not connected'}
                  </span>
                </div>
              </div>

              {/* Tokens Section */}
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">
                  Your Tokens
                </label>
                <div className="bg-surface-accent p-4 rounded border border-border-primary">
                  <div className="text-center py-4">
                    <div className="text-2xl mb-2">💳</div>
                    <p className="text-sm text-foreground-primary">
                      Your wallet is empty
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-surface-accent text-foreground-primary rounded cursor-pointer font-medium"
                >
                  Close
                </button>
                <button
                  onClick={onDisconnect}
                  disabled={isDisconnecting}
                  className="flex-1 px-4 py-2 gradient-primary text-foreground-primary rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
                >
                  {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;