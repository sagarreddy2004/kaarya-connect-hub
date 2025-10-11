import { Request, Response } from 'express';

// Helper function to send a success response
export const sendSuccessResponse = (res: Response, data: any, message: string = 'Success') => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

// Helper function to send an error response
export const sendErrorResponse = (res: Response, message: string, statusCode: number = 400) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

// Helper function to validate if an object is empty
export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0;
};

// Helper function to generate a random string (e.g., for tokens)
export const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};