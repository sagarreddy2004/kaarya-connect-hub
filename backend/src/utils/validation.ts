import { body, validationResult } from 'express-validator';

export const validateUserRegistration = [
  body('username')
    .isString()
    .withMessage('Username must be a string')
    .notEmpty()
    .withMessage('Username is required'),
  body('email')
    .isEmail()
    .withMessage('Email must be a valid email address')
    .notEmpty()
    .withMessage('Email is required'),
  body('password')
    .isString()
    .withMessage('Password must be a string')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateJobCreation = [
  body('title')
    .isString()
    .withMessage('Job title must be a string')
    .notEmpty()
    .withMessage('Job title is required'),
  body('description')
    .isString()
    .withMessage('Job description must be a string')
    .notEmpty()
    .withMessage('Job description is required'),
  body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .notEmpty()
    .withMessage('Price is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Additional validation functions can be added here as needed.