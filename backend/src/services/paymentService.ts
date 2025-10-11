import { Payment } from "../models/Payment";
import { User } from "../models/User";
import { Job } from "../models/Job";
import { v4 as uuidv4 } from "uuid";

export const createPayment = async (userId: string, jobId: string, amount: number) => {
  const paymentId = uuidv4();
  
  const payment = new Payment({
    paymentId,
    userId,
    jobId,
    amount,
    status: "Pending",
    createdAt: new Date(),
  });

  await payment.save();
  return payment;
};

export const getPaymentById = async (paymentId: string) => {
  const payment = await Payment.findOne({ paymentId });
  return payment;
};

export const updatePaymentStatus = async (paymentId: string, status: string) => {
  const payment = await Payment.findOneAndUpdate(
    { paymentId },
    { status },
    { new: true }
  );
  return payment;
};

export const getUserPayments = async (userId: string) => {
  const payments = await Payment.find({ userId });
  return payments;
};

export const getJobPayments = async (jobId: string) => {
  const payments = await Payment.find({ jobId });
  return payments;
};