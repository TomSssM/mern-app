import cors from 'cors';
import config from '../../config';

const middleware = cors({
  ...config.cors,
});

export { middleware as cors };
