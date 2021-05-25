export const defaultPort = 3000;

export const devPort = 8080;

export const port = Number.isNaN(+process.env.PORT)
  ? defaultPort
  : +process.env.PORT;
