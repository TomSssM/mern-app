import path from 'path';

import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';

import config from '../config';

import corsMiddleware from './middleware/corsMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import router from './routes';

const { STATIC_PATH, MONGO_URI } = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(corsMiddleware);
app.use(router);

mongoose
  .connect(MONGO_URI, {
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

app.use(errorMiddleware);

export default app;
