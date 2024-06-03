const {
  MONGO_PORT = '27017',
  MONGO_PROTOCOL = 'mongodb',
  MONGO_HOST = '127.0.0.1',
  MONGO_DB_NAME = 'tasks',
  MONGO_URI = `${MONGO_PROTOCOL}://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`,
} = process.env;

export { MONGO_URI };
