import path from 'path';

export const ROOT_PATH = path.resolve(__dirname, '..', '..');

export const BUILD_PATH = path.join(ROOT_PATH, 'build');

export const STATIC_PATH = path.join(BUILD_PATH, 'static');
