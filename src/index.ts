import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middleware';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL
  })
);

app.use('/api', router);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('200');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${PORT}`);
});
