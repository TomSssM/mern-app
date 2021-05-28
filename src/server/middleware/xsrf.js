export const xsrf = (req, res, next) => {
  if (
    req.method === 'POST' &&
    req.headers['content-type'] !== 'application/json'
  ) {
    throw new Error('403'); // todo: errors
  }
  next();
};
