import cors from 'cors';
import config from '../../config';

const { DEV_PORT } = config;

export default cors({
  origin:
    process.env.NODE_ENV === 'development'
      ? [`http://localhost:${DEV_PORT}`]
      : [],
  credentials: true,
});
