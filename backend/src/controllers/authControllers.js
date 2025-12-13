import { SalvarUsuarios } from '../services/auth_service.js';

export async function Register(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // Validação de dados
    if (!nome || !email || !senha) {
      return res.status(400).json({ Message: "Todos os campos são obrigatórios!" });
    }

  
    
    const salvar = await SalvarUsuarios(nome, email, senha);

    if (!salvar) {
      return res.status(400).json({ Message: "Erro ao criar conta!" }); 
    }
    
    res.status(201).json(salvar);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Erro no servidor!" });
  }
}
