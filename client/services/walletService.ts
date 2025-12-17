export interface WalletResponse {
  success: boolean;
  message: string;
  walletAddress?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const walletService = {
  connectWallet: async (walletAddress: string): Promise<WalletResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/wallet/connect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Connect wallet error:', error);
      throw new Error('Failed to connect wallet to backend');
    }
  },

  disconnectWallet: async (walletAddress: string): Promise<WalletResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/wallet/disconnect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Disconnect wallet error:', error);
      throw new Error('Failed to disconnect wallet from backend');
    }
  },
};