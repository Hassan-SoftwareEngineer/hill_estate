export const metaMaskService = {
  isMetaMaskInstalled: (): boolean => {
    if (typeof window === 'undefined') return false;
    return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
  },

  connectMetaMask: async (): Promise<string> => {
    if (!metaMaskService.isMetaMaskInstalled()) {
      throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No accounts found. Please connect your MetaMask wallet.');
      }

      return accounts[0];
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('User rejected the connection request.');
      }
      throw new Error('Failed to connect to MetaMask.');
    }
  },
};

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;
    };
  }
}
