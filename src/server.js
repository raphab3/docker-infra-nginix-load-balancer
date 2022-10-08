import 'dotenv/config';
import app from './app.js';
import logger from 'pino';
const log = logger();
const containerId = process.env.HOSTNAME;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  log.info(`server is running containerId: ${containerId} on PORT ${PORT}`);
});
