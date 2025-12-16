import express from 'express';
import router from './routes/routes_manga.js';
import up from './routes/uploads.js';
import auth from './routes/auth_routes.js';


const app = express();

app.use(express.json());
app.use('/uploads_images', express.static('uploads_images'));

app.use('/users', auth);
app.use('/app', router);
app.use('/adm', up)

export default app;