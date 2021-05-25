import path from 'path';
import express from 'express';
import config from '../config';

const { port, staticPath } = config;

const app = express();

app.use(express.json());

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

app.use((error, req, res, _next) => {
  console.error('error', error);
  res.status(500).end();
});

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
