import HttpError from './HttpError';

class BadRequestError extends HttpError {
  constructor(message = 'Bad Request') {
    super({
      message,
      statusCode: 400,
    });
  }
}

export default BadRequestError;
