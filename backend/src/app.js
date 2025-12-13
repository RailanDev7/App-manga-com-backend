import express from 'express';
import router from './routes/routes_manga.js';


const app = express();

app.use(express.json());
app.use('/uploads_images', express.static('uploads_images'));

app.use('/app', router)

export default app;