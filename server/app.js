import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from './routes';
import xsrf from './middleware/xsrf';
import cors from './middleware/cors';
import config from '../config';
import HttpError from '../shared/errors/HttpError';

const { MONGO_URI, MONGO_DB_NAME, STATIC_PATH } = config;

const app = express();

app.use(cors);
app.use(xsrf);
app.use(express.json());
app.use(cookieParser());
app.use(router);

const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(STATIC_PATH));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(STATIC_PATH, 'index.html'));
  });
}

app.use((error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({
      message: error.message,
    });
  } else {
    console.error('error', error);
    res.status(500).end();
  }
});

export default app;
