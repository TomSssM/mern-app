const {
  MONGO_PORT = '27017',
  MONGO_PROTOCOL = 'mongodb',
  MONGO_HOST = '127.0.0.1',
  MONGO_DB_NAME = 'test',
} = process.env;

export const MONGO_URI =
  process.env.MONGO_URI ?? `${MONGO_PROTOCOL}://${MONGO_HOST}:${MONGO_PORT}`;

export { MONGO_DB_NAME };
