import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import jobRoutes from './routes/jobs';
import reviewRoutes from './routes/reviews';
import paymentRoutes from './routes/payments';
import errorHandler from './middleware/errorHandler';
import connectDB from "./config/database";

connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;