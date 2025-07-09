import winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

const transports = [];

if (process.env.NODE_ENV === 'production') {
  const logtail = new Logtail(process.env.LOGTAIL_TOKEN, { endpoint: process.env.LOGTAIL_ENDPOINT });
  transports.push(new LogtailTransport(logtail));
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple())
    })
  );
}

const logger = winston.createLogger({
  format: winston.format.json(),
  transports
});

export default logger;
