import { Router } from 'express';
import { createReview, getReviewsByJobId } from '../controllers/reviewController';
import { validateReview } from '../middleware/validation';

const router = Router();

// Route to create a new review
router.post('/', validateReview, createReview);

// Route to get reviews for a specific job
router.get('/:jobId', getReviewsByJobId);

export default router;