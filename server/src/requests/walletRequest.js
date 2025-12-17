export class WalletRequest {
  static validateConnect(body) {
    const errors = {};
    const { walletAddress } = body;

    if (!walletAddress) {
      errors.walletAddress = 'Wallet address is required';
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      errors.walletAddress = 'Invalid wallet address format';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  static validateDisconnect(body) {
    const errors = {};
    const { walletAddress } = body;

    if (!walletAddress) {
      errors.walletAddress = 'Wallet address is required';
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      errors.walletAddress = 'Invalid wallet address format';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  static sanitizeWalletAddress(walletAddress) {
    if (!walletAddress) return '';
    return walletAddress.trim().toLowerCase();
  }
}