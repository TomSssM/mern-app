import HttpError from './HttpError';

class ForbiddenError extends HttpError {
  constructor(message = 'Forbidden') {
    super({
      message,
      statusCode: 403,
    });
  }
}

export default ForbiddenError;
