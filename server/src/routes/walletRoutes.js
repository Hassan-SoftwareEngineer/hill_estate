import express from 'express';
import { connectWallet, disconnectWallet } from '../controllers/walletController.js';

const router = express.Router();

router.post('/connect', connectWallet);
router.post('/disconnect', disconnectWallet);

export default router;
