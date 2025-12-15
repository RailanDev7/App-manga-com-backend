import { SalvarUsuarios, loginService } from '../services/auth_service.js';

export async function register(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        message: 'Todos os campos são obrigatórios',
      });
    }

    const usuario = await SalvarUsuarios(nome, email, senha);

    if (!usuario) {
      return res.status(400).json({
        message: 'Erro ao criar conta',
      });
    }

    return res.status(201).json({
      message: 'Conta criada com sucesso',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Erro no servidor',
    });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        message: 'Email e senha são obrigatórios',
      });
    }

    const token = await loginService(email, senha);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({
      message: err.message || 'Email ou senha inválidos',
    });
  }
}
