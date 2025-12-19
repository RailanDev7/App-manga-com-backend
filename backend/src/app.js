import express from 'express';
import router from './routes/animes_routes.js';
import auth from './routes/auth_routes.js';
import cors from 'cors';
import path from 'path';


const app = express();
app.use(cors());

app.use(express.json());
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Expor uploads usando caminho absoluto
app.use('/uploads', express.static(resolve(__dirname, '../../uploads')));
;
app.use('/router', router)
app.use('/users', auth);


export default app;