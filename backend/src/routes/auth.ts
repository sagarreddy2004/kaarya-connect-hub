import express from 'express';
import { register, login } from '../controllers/authController';
import { validateUserRegistration, validateUserLogin } from '../middleware/validation';

const router = express.Router();

// Registration route
router.post('/register', validateUserRegistration, register);

// Login route
router.post('/login', validateUserLogin, login);

export default router;