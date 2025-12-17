import { WalletService } from '../services/walletService.js';

export const connectWallet = (req, res, next) => {
  try {
    console.log('DEBUG: Connect wallet request received:', req.body);
    const { walletAddress } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({ 
        success: false, 
        message: 'Wallet address is required' 
      });
    }

    // Validate wallet address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid wallet address format'
      });
    }

    const user = WalletService.connect(walletAddress);
    
    res.json({ 
      success: true,
      message: 'Wallet connected successfully', 
      walletAddress,
      user 
    });
  } catch (err) {
    next(err);
  }
};

export const disconnectWallet = (req, res, next) => {
  try {
    console.log('DEBUG: Disconnect wallet request received:', req.body);
    const { walletAddress } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({ 
        success: false, 
        message: 'Wallet address is required' 
      });
    }

    WalletService.disconnect(walletAddress);
    
    res.json({ 
      success: true,
      message: 'Wallet disconnected successfully' 
    });
  } catch (err) {
    next(err);
  }
};
