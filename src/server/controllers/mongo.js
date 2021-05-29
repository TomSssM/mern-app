import { MongoClient } from 'mongodb';
import config from '../../config';

const { mongoUri } = config;

let db;

let client;

export const mongoConnect = async () => {
  try {
    client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    db = client.db('mern');
  } finally {
    await client?.close();
  }
};

export const getMongoDatabase = () => db;

export const getMongoClient = () => client;
