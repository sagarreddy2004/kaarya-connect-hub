import Payment from "../models/Payment";
import User from "../models/User";
import Job from "../models/Job";

export const createPayment = async (paymentData: any) => {
  const payment = new Payment(paymentData);
  await payment.save();
  return payment;
};

export const getPaymentById = async (paymentId: string) => {
  const payment = await Payment.findById(paymentId)
    .populate('jobId')
    .populate('customerId', 'username email')
    .populate('workerId', 'username email');
  return payment;
};

export const updatePaymentStatus = async (paymentId: string, status: string) => {
  const payment = await Payment.findByIdAndUpdate(
    paymentId,
    { status },
    { new: true }
  );
  return payment;
};

export const getPaymentsByCustomer = async (customerId: string) => {
  const payments = await Payment.find({ customerId })
    .populate('jobId')
    .populate('workerId', 'username email');
  return payments;
};

export const getPaymentsByWorker = async (workerId: string) => {
  const payments = await Payment.find({ workerId })
    .populate('jobId')
    .populate('customerId', 'username email');
  return payments;
};

export const getJobPayments = async (jobId: string) => {
  const payments = await Payment.find({ jobId })
    .populate('customerId workerId', 'username email');
  return payments;
};