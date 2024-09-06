import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import transactionsRouter from '../api/transactions';
import accountsRouter from '../api/accounts';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));

// Healhcheck to make sure the service is up
app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('The service is up and running');
});

app.use('/transactions', transactionsRouter);
app.use('/accounts', accountsRouter);

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
});

export default app;
