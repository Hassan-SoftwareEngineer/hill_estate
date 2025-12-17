// Mock in-memory storage for connected wallets
const connectedWallets = new Map();

export const WalletService = {
  connect(walletAddress) {
    connectedWallets.set(walletAddress, { tokens: [] });
    return { walletAddress, tokens: [] };
  },

  disconnect(walletAddress) {
    connectedWallets.delete(walletAddress);
  },

  getWallet(walletAddress) {
    return connectedWallets.get(walletAddress) || null;
  },
};
