import { conexao } from '../database/connection.js';
import bcrypt from 'bcrypt';

const limite = 12


export async function SalvarUsuarios(nome, email, senha) {
    const hash = await bcrypt.hash(senha, limite)
    const [result] = await conexao.query(`INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)`, [nome, email, hash]);
    return result;
    
}