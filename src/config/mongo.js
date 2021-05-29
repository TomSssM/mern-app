const {
  MONGO_URI,
  MONGO_PORT = '27017',
  MONGO_PROTOCOL = 'mongodb',
  MONGO_HOST = '127.0.0.1',
} = process.env;

export const mongoUri =
  MONGO_URI ?? `${MONGO_PROTOCOL}://${MONGO_HOST}:${MONGO_PORT}`;
