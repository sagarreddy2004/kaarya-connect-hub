import { Router } from 'express';
import { processPayment, getPaymentStatus } from '../controllers/paymentController';
import { authenticate } from '../middleware/auth';

const router = Router();

// Route to process a payment
router.post('/process', authenticate, processPayment);

// Route to get the status of a payment
router.get('/status/:paymentId', authenticate, getPaymentStatus);

export default router;