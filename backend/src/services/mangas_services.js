import { conexao } from '../database/connection.js'

export async function listarMangas() {
  const [rows] = await conexao.query('SELECT * FROM mangas ORDER BY id DESC');
  return rows;
}

export async function buscarMangaPorIdService(id) {
    const [rows] = await conexao.query('SELECT * FROM manga_infos WHERE id = ?', [id]);
    return rows[0];
}
export async function salvarMangaService(nome, descricao, ImageUrl) {
    const [result] = await conexao.query(`INSERT INTO manga_infos (nome, descricao, capa)
        values (?, ?, ?)`,
    [nome, descricao, ImageUrl]
)
return result.insertId;
    
};
