import { Router } from "express";
import { registerController, loginController } from "../controllers/authControllers.js";

const auth = Router();



auth.post('/register', registerController)

auth.post('/login', loginController)



export default auth;