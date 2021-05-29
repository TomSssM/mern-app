import { devPort } from './app';

export default {
  origin: process.env.NODE_ENV === 'development' && [
    `http://localhost:${devPort}`,
  ],
};
