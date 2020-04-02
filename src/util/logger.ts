import * as winston from 'winston';
import {Logger} from 'winston';
import * as expressWinston from 'express-winston';

//@ts-ignore
export let before = expressWinston.logger({
  winstonInstance: winston
});
//@ts-ignore
export let after = expressWinston.errorLogger({
  winstonInstance: winston
});

const logger = new Logger({
  transports: [
    new winston.transports.Console({level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'}),
    new winston.transports.File({filename: 'debug.log', level: 'debug'})
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default logger;
