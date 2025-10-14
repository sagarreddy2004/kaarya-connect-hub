import Job from "../models/Job";

// Create a new job
export const createJob = async (jobData: any) => {
  const job = new Job(jobData);
  return await job.save();
};

// Get all jobs
export const getAllJobs = async () => {
  return await Job.find().populate('customerId', 'username email firstName lastName').populate('workerId', 'username email firstName lastName');
};

// Get a job by ID
export const getJobById = async (jobId: string) => {
  return await Job.findById(jobId).populate('customerId workerId');
};

// Update a job by ID
export const updateJob = async (jobId: string, jobData: any) => {
  return await Job.findByIdAndUpdate(jobId, jobData, { new: true });
};

// Delete a job by ID
export const deleteJob = async (jobId: string) => {
  return await Job.findByIdAndDelete(jobId);
};

// Get jobs by customer
export const getJobsByCustomer = async (customerId: string) => {
  return await Job.find({ customerId })
    .populate('workerId', 'username email firstName lastName')
    .populate('customerId', 'username email firstName lastName');
};

// Get jobs by worker
export const getJobsByWorker = async (workerId: string) => {
  return await Job.find({ workerId })
    .populate('customerId', 'username email firstName lastName')
    .populate('workerId', 'username email firstName lastName');
};