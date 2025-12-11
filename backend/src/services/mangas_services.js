import { conexao } from '../database/connection.js'

export async function listarMangasService() {
const [rows] = await conexao.query('SELECT * FROM mangas_dados');
return rows;

    
}
export async function buscarMangaPorIdService(id) {
    const [rows] = await conexao.query('SELECT * FROM mangas_dados WHERE id = ?', [id]);
    return rows[0];
}