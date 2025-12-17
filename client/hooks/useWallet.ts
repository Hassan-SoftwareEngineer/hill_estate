// hooks/useWallet.ts
import { useMutation } from '@tanstack/react-query';
import { walletService } from '@/services/walletService';
import { metaMaskService } from '@/utils/metamask';
import { useWalletContext } from '@/context/WalletContext';

export const useWallet = () => {
  const { walletAddress, setWalletAddress, isConnected, isLoading } = useWalletContext();

  const connectMutation = useMutation({
    mutationFn: async () => {
      const address = await metaMaskService.connectMetaMask();
      await walletService.connectWallet(address);
      return address;
    },
    onSuccess: (address) => {
      setWalletAddress(address);
    },
  });

  const disconnectMutation = useMutation({
    mutationFn: async () => {
      if (!walletAddress) throw new Error('No wallet connected');
      await walletService.disconnectWallet(walletAddress);
    },
    onSuccess: () => {
      setWalletAddress(null);
    },
  });

  return {
    walletAddress,
    isConnected,
    isLoading,
    isConnecting: connectMutation.isPending,
    isDisconnecting: disconnectMutation.isPending,
    connectWallet: connectMutation.mutateAsync,
    disconnectWallet: disconnectMutation.mutateAsync,
    isMetaMaskInstalled: metaMaskService.isMetaMaskInstalled(),
  };
};