import { HttpError } from './HttpError';

export class NotFoundError extends HttpError {
  constructor(message = 'Not Found') {
    super({
      message,
      status: 404,
    });
  }
}
