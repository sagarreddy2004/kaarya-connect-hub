export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const ERROR_MESSAGES = {
  USER_NOT_FOUND: "User not found.",
  INVALID_CREDENTIALS: "Invalid credentials.",
  JOB_NOT_FOUND: "Job not found.",
  REVIEW_NOT_FOUND: "Review not found.",
  PAYMENT_FAILED: "Payment processing failed.",
  UNAUTHORIZED_ACCESS: "Unauthorized access.",
};

export const JWT_CONFIG = {
  SECRET: process.env.JWT_SECRET || "your_jwt_secret",
  EXPIRATION: "1h",
};

export const DATABASE_CONFIG = {
  URL: process.env.DATABASE_URL || "mongodb://localhost:27017/kaarya_connect_hub",
};