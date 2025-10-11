import { Router } from 'express';
import { createJob, getJobs, getJobById, updateJob, deleteJob } from '../controllers/jobController';
import { validateJob } from '../middleware/validation';

const router = Router();

// Route to create a new job
router.post('/', validateJob, createJob);

// Route to get all jobs
router.get('/', getJobs);

// Route to get a job by ID
router.get('/:id', getJobById);

// Route to update a job by ID
router.put('/:id', validateJob, updateJob);

// Route to delete a job by ID
router.delete('/:id', deleteJob);

export default router;