class HttpError extends Error {
  constructor({ message = 'Something went wrong', statusCode = 500 } = {}) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default HttpError;
