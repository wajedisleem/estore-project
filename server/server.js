import express from 'express';
import cors from 'cors';
import language from './middleware/language.middleware.js';
import router from './routes.js';
import notFoundHandler from './handlers/notfound.handler.js';
import errorHandler from './handlers/error.handler.js';
import DBManager from './database/db.manager.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use(language);
app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, async () => {
  await DBManager.connect();
  console.log('Server is running on http://localhost:' + port);
});
