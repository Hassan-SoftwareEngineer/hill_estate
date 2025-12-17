import { WalletService } from '../services/walletService.js';
import { ResponseUtils } from '../utils/responseUtils.js';
import { WalletRequest } from '../requests/walletRequest.js';

export const connectWallet = (req, res, next) => {
  try {
    console.log('DEBUG: Connect wallet request received:', req.body);
    
    // Validate request
    const validation = WalletRequest.validateConnect(req.body);
    if (!validation.isValid) {
      return ResponseUtils.validationError(res, validation.errors);
    }

    // Sanitize wallet address
    const walletAddress = WalletRequest.sanitizeWalletAddress(req.body.walletAddress);

    // Connect wallet
    const user = WalletService.connect(walletAddress);
    
    return ResponseUtils.success(
      res,
      'Wallet connected successfully',
      { walletAddress, user },
      200
    );
  } catch (err) {
    next(err);
  }
};

export const disconnectWallet = (req, res, next) => {
  try {
    console.log('DEBUG: Disconnect wallet request received:', req.body);
    
    // Validate request
    const validation = WalletRequest.validateDisconnect(req.body);
    if (!validation.isValid) {
      return ResponseUtils.validationError(res, validation.errors);
    }

    // Sanitize wallet address
    const walletAddress = WalletRequest.sanitizeWalletAddress(req.body.walletAddress);

    // Disconnect wallet
    WalletService.disconnect(walletAddress);
    
    return ResponseUtils.success(
      res,
      'Wallet disconnected successfully',
      null,
      200
    );
  } catch (err) {
    next(err);
  }
};
