import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middleware';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin:true,credentials: true}));
app.options('*', cors());
app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static('src/uploads'));

app.use('/api', router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${PORT}`);
});
