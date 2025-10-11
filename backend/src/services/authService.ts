import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { AuthConfig } from '../config/auth';

const saltRounds = 10;

export const registerUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new User({ email, password: hashedPassword });
  return await newUser.save();
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, AuthConfig.jwtSecret, { expiresIn: AuthConfig.tokenExpiration });
  return { token, user };
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, AuthConfig.jwtSecret);
};