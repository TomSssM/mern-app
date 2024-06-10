import HttpError from './HttpError';

class NotFoundError extends HttpError {
  constructor(message = 'Not Found') {
    super({
      message,
      statusCode: 404,
    });
  }
}

export default NotFoundError;
