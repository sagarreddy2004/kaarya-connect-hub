import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  jobId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Job',
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = model('Review', reviewSchema);

export default Review;