import express from 'express';
import { getAllUsers, getUserProfile, updateUserProfile } from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Route to get all users
router.get('/', authenticate, getAllUsers);

// Route to get user profile
router.get('/profile', authenticate, getUserProfile);

// Route to update user profile
router.put('/profile', authenticate, updateUserProfile);

export default router;