export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  jobId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  jobId: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthToken {
  userId: string;
  iat: number;
  exp: number;
}