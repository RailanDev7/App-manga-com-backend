import { SalvarUsuarios, loginService } from '../services/auth_service.js';

export async function registerController(req, res) {
  try {
    const { nome, email, senha } = req.body;
    await SalvarUsuarios(nome, email, senha);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function loginController(req, res) {
  try {
    const { email, senha } = req.body;
    const token = await loginService(email, senha);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}
