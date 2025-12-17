export class ResponseUtils {
  static send(res, success, message, statusCode, data = null, errors = null) {
    return res.status(statusCode).json({
      success,
      message,
      ...(data && { data }),
      ...(errors && { errors }),
      timestamp: new Date().toISOString()
    });
  }

  static success(res, message = 'Success', data = null, statusCode = 200) {
    return this.send(res, true, message, statusCode, data);
  }

  static error(res, message = 'Error', statusCode = 400, errors = null) {
    return this.send(res, false, message, statusCode, null, errors);
  }

  static validationError(res, errors, message = 'Validation failed') {
    return this.send(res, false, message, 422, null, errors);
  }
}