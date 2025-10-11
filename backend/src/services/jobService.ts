import { Job } from "../models/Job";
import { IJob } from "../types/index";

// Create a new job
export const createJob = async (jobData: IJob) => {
  const job = new Job(jobData);
  return await job.save();
};

// Get all jobs
export const getAllJobs = async () => {
  return await Job.find();
};

// Get a job by ID
export const getJobById = async (jobId: string) => {
  return await Job.findById(jobId);
};

// Update a job by ID
export const updateJob = async (jobId: string, jobData: Partial<IJob>) => {
  return await Job.findByIdAndUpdate(jobId, jobData, { new: true });
};

// Delete a job by ID
export const deleteJob = async (jobId: string) => {
  return await Job.findByIdAndDelete(jobId);
};