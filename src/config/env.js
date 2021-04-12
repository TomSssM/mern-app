export const LOCAL_PORT = 8080;

export const DEV_PORT = 8080;

const FORCE_PORT = +process.env.PORT;

export const PORT = Number.isNaN(FORCE_PORT) ? LOCAL_PORT : FORCE_PORT;
