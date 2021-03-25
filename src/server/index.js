import path from 'path';
import express from 'express';
import { PORT, STATIC_PATH } from '../config';

const app = express();

app.use(express.json());

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

app.use(express.static(STATIC_PATH));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(STATIC_PATH, 'index.html'));
});

// todo: error handling

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
