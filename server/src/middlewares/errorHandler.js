import { ResponseUtils } from '../utils/responseUtils.js';

export const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err.stack);
  
  // Handle different types of errors
  if (err.name === 'ValidationError') {
    return ResponseUtils.validationError(res, err.errors, err.message);
  }
  
  if (err.name === 'UnauthorizedError') {
    return ResponseUtils.unauthorized(res, err.message);
  }
  
  if (err.statusCode === 404) {
    return ResponseUtils.notFound(res, err.message);
  }
  
  // Default server error
  return ResponseUtils.serverError(
    res, 
    process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  );
};
