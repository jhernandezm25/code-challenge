import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './routes/routes';
import multer from 'multer';

const app = express();
const port = 3001;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
