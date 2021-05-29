import { BadRequestError } from '../../shared/errors';

export const xsrf = (req, res, next) => {
  if (
    req.method === 'POST' &&
    req.headers['content-type'] !== 'application/json'
  ) {
    throw new BadRequestError();
  }
  next();
};
