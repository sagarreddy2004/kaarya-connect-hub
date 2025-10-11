import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../config/auth';

const saltRounds = 10;

export const registerUser = async (email: string, password: string, userData: any) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new User({ 
    email, 
    password: hashedPassword,
    ...userData 
  });
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

  const token = jwt.sign(
    { id: user._id.toString() }, 
    authConfig.jwtSecret, 
    { expiresIn: '24h' }
  );
  return { token, user: { ...user.toObject(), password: undefined } };
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, authConfig.jwtSecret);
};