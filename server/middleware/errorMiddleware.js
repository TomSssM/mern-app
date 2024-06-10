import HttpError from '../../shared/errors/HttpError';

function errorMiddleware(error, req, res, next) {
  const statusCode = error instanceof HttpError ? error.statusCode : 500;

  res.status(statusCode);

  if (process.env.NODE_ENV === 'production' && statusCode === 500) {
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
