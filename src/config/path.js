import path from 'path';

export const rootPath = path.resolve(__dirname, '..', '..');

export const buildPath = path.join(rootPath, 'build');

export const staticPath = path.join(buildPath, 'static');
