import path from 'path';
import express from 'express';
import router from './routes';
import { xsrf } from './middleware';
import config from '../config';

const { port, staticPath } = config;

const app = express();

app.use(xsrf);
app.use(express.json());
app.use(router);

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

app.use((error, req, res, next) => {
  console.error('error', error);
  res.status(500).end();
});

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
