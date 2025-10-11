import { Request, Response } from 'express';
import Job from '../models/Job';
import * as jobService from '../services/jobService';

// Create a new job listing
export const createJob = async (req: Request, res: Response) => {
  try {
    const jobData = req.body;
    const newJob = await jobService.createJob(jobData);
    res.status(201).json(newJob);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating job', error: error.message });
  }
};

// Get all job listings
export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.status(200).json(jobs);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
};

export const getJobs = getAllJobs; // Alias for compatibility

// Get a job by ID
export const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;
    const job = await jobService.getJobById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching job', error: error.message });
  }
};

// Update a job listing
export const updateJob = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;
    const jobData = req.body;
    const updatedJob = await jobService.updateJob(jobId, jobData);
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(updatedJob);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating job', error: error.message });
  }
};

// Delete a job listing
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await jobService.deleteJob(jobId);
    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting job', error: error.message });
  }
};