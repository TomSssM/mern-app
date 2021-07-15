import HttpError from './HttpError';

class ForbiddenError extends HttpError {
  constructor(message = 'Forbidden') {
    super({
      message,
      status: 403,
    });
  }
}

export default ForbiddenError;
