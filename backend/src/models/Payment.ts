import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  jobId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
  workerId: mongoose.Types.ObjectId;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema: Schema = new Schema({
  jobId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Job',
  },
  customerId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  workerId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'INR'],
    default: 'INR',
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
  },
}, {
  timestamps: true,
});

const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);

export default Payment;