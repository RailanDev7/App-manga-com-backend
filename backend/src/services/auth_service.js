import { conexao } from '../database/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const limite = 12;

export async function SalvarUsuarios(nome, email, senha) {
  const hash = await bcrypt.hash(senha, limite);
  const [result] = await conexao.query(
    `INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)`,
    [nome, email, hash]
  );
  return result;
}

export async function loginService(email, senha) {
  const [rows] = await conexao.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email]
  );

  if (rows.length === 0) throw new Error('Usuário não encontrado');

  const user = rows[0];
  const senhaOk = await bcrypt.compare(senha, user.senha);
  if (!senhaOk) throw new Error('Senha inválida');

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return token;
}
