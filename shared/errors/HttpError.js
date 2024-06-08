class HttpError extends Error {
  constructor({ message = 'Something went wrong', status = 500 } = {}) {
    super(message);
    this.status = status;
  }
}

export default HttpError;
