import HttpError from './HttpError';

class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized') {
    super({
      message,
      status: 401,
    });
  }
}

export default UnauthorizedError;
