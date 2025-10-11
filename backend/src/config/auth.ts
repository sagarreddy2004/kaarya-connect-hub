import dotenv from 'dotenv';

dotenv.config();

const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key_change_this_in_production',
  jwtExpiration: process.env.JWT_EXPIRATION || '24h',
};

export default authConfig;