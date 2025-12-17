import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import walletRoutes from './routes/walletRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

const API_PREFIX = process.env.API_PREFIX || '/api';
app.use(`${API_PREFIX}/wallet`, walletRoutes);

app.use(errorHandler);

export default app;
