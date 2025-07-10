import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import language from './middleware/language.middleware.js';
import authentication from './middleware/auth.middleware.js';
import router from './routes.js';
import notFoundHandler from './handlers/notfound.handler.js';
import errorHandler from './handlers/error.handler.js';
import DBManager from './database/db.manager.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(language);
app.use(authentication)
app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, async () => {
  await DBManager.connect();
  console.log('Server is running on http://localhost:' + port);
});
