import cors from 'cors';

import config from '../../config';

const { DEV_PORT } = config;

// TODO: perhaps reverse-engineer the 'cors' package to include it into my repo
export default cors({
  origin:
    process.env.NODE_ENV === 'development'
      ? [`http://localhost:${DEV_PORT}`] // TODO: replace to config.HOST or smth
      : [],
  credentials: true,
});
