import { Router } from 'express';
import {buscarMangaPorId, ListarMangas} from '../controllers/manga_controllers.js'



const router = Router();

router.get("/mangas", ListarMangas);

router.get("/mangas/:id", buscarMangaPorId);

export default router;