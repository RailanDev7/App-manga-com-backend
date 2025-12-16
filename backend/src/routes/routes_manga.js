import { Router } from 'express';
import { listarMangas, buscarMangaPorIdService } from '../services/mangas_services.js';

const router = Router();

router.get('/mangas', listarMangas);


router.post('/buscar', buscarMangaPorIdService);



export default router;
