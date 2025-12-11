import { conexao } from '../database/connection.js'

async function listarMangasService() {
const [rows] = await conexao.query('SELECT * FROM mangas');
return rows;

    
}
export async function buscarMangaPorIdService(manga_id) {
    const [rows] = await conexao.query('SELECT * FROM mangas WHERE id = ?', [manga_id]);
    return rows[0];
}