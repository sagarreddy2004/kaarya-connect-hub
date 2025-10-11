import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Database - MongoDB
  MONGO_URI: process.env.MONGO_URI || "mongodb+srv://vidyasagarreddykarru:SagarReddy2004@cluster0.ot2ef.mongodb.net/kaarya-connect-hub?retryWrites=true&w=majority",
  
  // Server
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // JWT
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '24h',
  
  // Email
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  FROM_EMAIL: process.env.FROM_EMAIL || 'noreply@kaaryaconnect.com',
  FROM_NAME: process.env.FROM_NAME || 'Kaarya Connect Hub',
  
  // Payment
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  
  // Frontend
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  
  // File Upload
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '5242880'),
  ALLOWED_FILE_TYPES: process.env.ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/gif',
};