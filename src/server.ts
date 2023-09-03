import express, { Express, Request, Response } from 'express';
import authRouter from './routes/auth.route';
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'success',
    message:
      'Sklog API - built with Node.js, Express, PostgreSQL, and TypeScript',
    data: null,
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
