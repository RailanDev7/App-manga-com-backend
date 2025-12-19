import { Router } from 'express';
import { uploadCapa } from '../config/uploadCapa.js';
import { AnimeId, buscaTeste, uploadVideo, criarAnimeController } from '../controllers/anime_controllers.js';
import { upload } from './uploads.js';

const router = Router();

router.get('/animes/:id', AnimeId)
router.get('/animes', buscaTeste)
router.post('/animes', upload.single('video'), uploadVideo);
router.post('/criar', uploadCapa.single('capa'), criarAnimeController)

export default router;
