import HttpError from './HttpError';

class NotFoundError extends HttpError {
  constructor(message = 'Not Found') {
    super({
      message,
      status: 404,
    });
  }
}

export default NotFoundError;
