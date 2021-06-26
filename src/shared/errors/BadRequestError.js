import HttpError from './HttpError';

class BadRequestError extends HttpError {
  constructor(message = 'Bad Request') {
    super({
      message,
      status: 400,
    });
  }
}

export default BadRequestError;
