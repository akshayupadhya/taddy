import morgan from 'morgan';
import { Router } from 'express';

import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import rfs from 'rotating-file-stream';

const logDirectory = join(__dirname + '../../../../logs');

existsSync(logDirectory) || mkdirSync(logDirectory);

const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
});

const logRouter: Router = Router();
logRouter.use(morgan('combined', { stream: accessLogStream }));
export const logger = logRouter;
