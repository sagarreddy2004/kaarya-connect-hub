import { Schema, model } from 'mongoose';

// NOTE: Original schema was oriented toward traditional job listings (company/salary required).
// Adapted for a service booking workflow where customers book workers directly.
// Required fields trimmed down and status enum expanded for booking lifecycle.
const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  location: { type: String }, // optional; can derive from customer or worker
  budget: { type: Number },   // optional negotiated amount
  salary: { type: Number },   // retained for backward compatibility (optional now)
  company: { type: String },  // retained (optional) – may store 'Individual'
  customerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  workerId: { type: Schema.Types.ObjectId, ref: 'User' }, // assigned/target worker
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'in-progress', 'completed', 'cancelled', 'open'],
    default: 'pending'
  },
  deadline: { type: Date },
}, { timestamps: true });

const Job = model('Job', jobSchema);

export default Job;