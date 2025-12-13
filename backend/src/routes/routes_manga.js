import { Router } from 'express';
import { upload } from '../middlewares/multer.js';
import {buscarMangaPorId, ListarMangas, salvarMangaController} from '../controllers/manga_controllers.js'



const router = Router();

router.get("/mangas", ListarMangas);

router.get("/mangas/:id", buscarMangaPorId);

router.post("/mangas/upload", upload.single("capa"), salvarMangaController);


export default router;