import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

// Register a new user
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user
export const login = async (req: Request, res: Response) => {
  try {
    const { token, user } = await loginUser(req.body);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};