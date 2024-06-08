import HttpError from '../../shared/errors/HttpError';

function errorMiddleware(error, req, res, next) {
  const status = error instanceof HttpError ? error.status : 500;

  res.status(status);

  if (process.env.NODE_ENV === 'production' && status === 500) {
    console.error('error', error);

    res.json({
      message: 'Something went wrong',
    });

    return;
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
}

export default errorMiddleware;
