export const LOCAL_PORT = 8080;

const forcePort = +process.env.PORT;

export const PORT = Number.isNaN(forcePort) ? LOCAL_PORT : forcePort;
