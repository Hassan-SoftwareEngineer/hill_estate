// components/atoms/WalletModal/index.tsx
import { useWallet } from '@/hooks/useWallet';
import React from 'react';

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

  if (!isOpen) return null;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-surface-primary border border-border-accent rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground-primary">
            {isConnected ? 'Wallet Details' : 'Connect Wallet'}
          </h2>
          <button
            onClick={onClose}
            className="text-foreground-primary hover:text-foreground-accent cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {!isConnected ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-4">🔗</div>
              <p className="text-foreground-primary mb-4">
                Connect your wallet to view your tokens
              </p>
              {!isMetaMaskInstalled ? (
                <button
                  onClick={() => window.open('https://metamask.io/download/', '_blank')}
                  className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  Install MetaMask
                </button>
              ) : (
                <button
                  onClick={onConnect}
                  disabled={isConnecting}
                  className="w-full px-4 py-2 gradient-primary text-white rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-1">
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
                <label className="block text-sm font-medium text-foreground-primary mb-1">
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
                  className="flex-1 px-4 py-2 bg-surface-accent text-foreground-primary rounded hover:bg-surface-secondary transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={onDisconnect}
                  disabled={isDisconnecting}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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