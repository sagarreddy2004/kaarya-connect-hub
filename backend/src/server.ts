import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { config } from './config/environment';
import connectDB from './config/database';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import jobRoutes from './routes/jobs';
import reviewRoutes from './routes/reviews';
import paymentRoutes from './routes/payments';
import errorHandler from './middleware/errorHandler';

// Load environment variables
dotenv.config();

const app = express();
const PORT = config.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Kaarya Connect Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    res.json({ status: 'OK', message: 'Database connection is active!' });
  } catch (error: any) {
    res.status(500).json({ status: 'Error', message: 'Database connection failed', error: error.message });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🗃️  Database test: http://localhost:${PORT}/api/test-db`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;