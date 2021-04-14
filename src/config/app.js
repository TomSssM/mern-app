export const DEFAULT_PORT = 8080;

export const DEV_PORT = 3000;

export const PORT = Number.isNaN(+process.env.PORT)
  ? DEFAULT_PORT
  : +process.env.PORT;
