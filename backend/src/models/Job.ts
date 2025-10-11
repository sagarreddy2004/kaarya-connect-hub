import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'completed', 'cancelled'],
    default: 'open',
  },
  category: {
    type: String,
  },
  budget: {
    type: Number,
  },
  deadline: {
    type: Date,
  },
}, { timestamps: true });

const Job = model('Job', jobSchema);

export default Job;