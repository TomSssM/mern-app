import HttpError from './HttpError';

class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized') {
    super({
      message,
      statusCode: 401,
    });
  }
}

export default UnauthorizedError;
