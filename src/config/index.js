import { port, devPort, defaultPort } from './app';
import { staticPath, buildPath, rootPath } from './path';
import { mongoUri } from './mongo';
import cors from './cors';

export default {
  port,
  devPort,
  defaultPort,
  rootPath,
  buildPath,
  staticPath,
  mongoUri,
  cors,
};
