import { Request, Response } from 'express';
import Review from '../models/Review';

// Create a new review
export const createReview = async (req: Request, res: Response) => {
  try {
    const { jobId, userId, rating, comment } = req.body;

    const newReview = new Review({
      jobId,
      userId,
      rating,
      comment,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error });
  }
};

// Get reviews for a specific job
export const getReviewsByJobId = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;
    const reviews = await Review.find({ jobId }).populate('userId', 'name');

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Get all reviews by a specific user
export const getReviewsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.find({ userId }).populate('jobId');

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user reviews', error });
  }
};