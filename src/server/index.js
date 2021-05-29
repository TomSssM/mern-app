import path from 'path';
import express from 'express';
import router from './routes';
import { xsrf, cors } from './middleware';
import { mongoConnect } from './controllers';
import config from '../config';
import { HttpError } from '../shared/errors';

const { port, staticPath } = config;

const app = express();

app.use(cors);
app.use(xsrf);
app.use(express.json());
app.use(router);

mongoConnect()
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

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
  if (error instanceof HttpError) {
    res.status(error.status).json({
      message: error.message,
    });
  } else {
    console.error('error', error);
    res.status(500).end();
  }
});

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
