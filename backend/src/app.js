import express from 'express';

import auth from './routes/auth_routes.js';
import cors from 'cors';


const app = express();
app.use(cors());

app.use(express.json());
app.use('/uploads_images', express.static('uploads_images'));

app.use('/users', auth);


export default app;