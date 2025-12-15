import { Router } from 'express';
import { upload } from '../middlewares/multer.js';
import {buscarMangaPorId, ListarMangas, salvarMangaController} from '../controllers/manga_controllers.js'
import { register, login } from '../controllers/authControllers.js';
import { authMiddleware } from '../middlewares/auth_middle.js';



const router = Router();

router.get("/mangas", ListarMangas);

router.get("/mangas/:id", buscarMangaPorId);

router.post("/mangas/upload", upload.single("capa"), salvarMangaController);

router.post("/register", register);

router.post('/login', login);


export default router;