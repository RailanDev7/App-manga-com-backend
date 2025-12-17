import { Router } from 'express';
import { AnimeId, buscaTeste, criarAnimeController } from '../controllers/anime_controllers.js';
import { upload } from './uploads.js';

const router = Router();

router.get('/animes/:id', AnimeId)
router.get('/animes', buscaTeste)
router.post('/animes', upload.single('imagem'), criarAnimeController);

export default router;
