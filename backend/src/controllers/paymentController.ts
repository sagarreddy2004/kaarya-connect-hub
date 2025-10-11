import { Request, Response } from 'express';
import * as PaymentService from '../services/paymentService';

// Process a payment
export const processPayment = async (req: Request, res: Response) => {
  try {
    const paymentData = req.body;
    const paymentResult = await PaymentService.createPayment(paymentData);
    res.status(200).json(paymentResult);
  } catch (error: any) {
    res.status(500).json({ message: 'Payment processing failed', error: error.message });
  }
};

// Get payment history for a user
export const getPaymentHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const paymentHistory = await PaymentService.getPaymentsByCustomer(userId);
    res.status(200).json(paymentHistory);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to retrieve payment history', error: error.message });
  }
};

// Get payment status
export const getPaymentStatus = async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.paymentId;
    const payment = await PaymentService.getPaymentById(paymentId);
    res.status(200).json(payment);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to retrieve payment status', error: error.message });
  }
};

// Refund a payment
export const refundPayment = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.body;
    const refundResult = await PaymentService.updatePaymentStatus(paymentId, 'refunded');
    res.status(200).json(refundResult);
  } catch (error: any) {
    res.status(500).json({ message: 'Refund processing failed', error: error.message });
  }
};