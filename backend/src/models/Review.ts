import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  jobId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Job',
  },
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  workerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    maxlength: 1000,
  },
  reviewType: {
    type: String,
    enum: ['for-worker', 'for-customer'],
    required: true,
  },
}, { timestamps: true });

const Review = model('Review', reviewSchema);

export default Review;