const rawPort = +process.env.PORT;

export const PORT = Number.isNaN(rawPort) ? 8080 : rawPort;
