import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

// Register a new user
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, ...userData } = req.body;
    const user = await registerUser(email, password, userData);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};