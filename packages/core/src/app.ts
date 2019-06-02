import express, { Application } from 'express';
import { logger } from '@taddy/logger';

const app: Application = express();

const port: Number = Number(process.env.PORT || 3000);
app.use(logger);
app.get('/', (req, res) => res.send('hello'));
app.listen(port, () => {
  console.info(`server listening on port ${port}`);
});