import { Router } from 'express';
import { createJob, getJobs, getJobById, updateJob, deleteJob, getJobsByCustomer, getJobsByWorker, updateJobStatus } from '../controllers/jobController';
import { validateJob } from '../middleware/validation';

const router = Router();

// Route to create a new job
router.post('/', validateJob, createJob);

// Route to get all jobs
router.get('/', getJobs);

// Route to get jobs for a customer
router.get('/customer/:customerId', getJobsByCustomer);

// Route to get jobs for a worker
router.get('/worker/:workerId', getJobsByWorker);

// Route to get a job by ID
router.get('/:id', getJobById);

// Route to update a job by ID
router.put('/:id', validateJob, updateJob);

// Route to update only job status
router.patch('/:id/status', updateJobStatus);

// Route to delete a job by ID
router.delete('/:id', deleteJob);

export default router;