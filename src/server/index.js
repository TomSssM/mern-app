import path from 'path';
import express from 'express';
import config from '../config';

const { PORT, STATIC_PATH } = config;

const app = express();

app.use(express.json());

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(STATIC_PATH));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(STATIC_PATH, 'index.html'));
  });
}

if (process.env.NODE_ENV === 'development') {
  app.get('*', (req, res) => {
    res.status(404).end();
  });
}

app.use((err, req, res, _next) => {
  res.status(500).end();
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
