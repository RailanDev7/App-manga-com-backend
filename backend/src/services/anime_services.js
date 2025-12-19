import { conexao } from '../database/connection.js';

export async function buscaAnimeId(id) {
  const [rows] = await conexao.query(
    'SELECT titulo, descricao, url_capa FROM animes WHERE id = ?',
    [id]
  );

  return rows[0];
}

export async function buscaAnime() {

  const [result] = await conexao.query('SELECT * FROM ANIMES');

  return result;
  
}
export async function criarEpisodio({
  titulo_episodio,
  url_video,
  anime_id,
  numero,
  descricao,
}) {
  const [result] = await conexao.query(
    `
    INSERT INTO episodios 
    (titulo_episodio, url_video, anime_id, numero, descricao)
    VALUES (?, ?, ?, ?, ?)
    `,
    [titulo_episodio, url_video, anime_id, numero, descricao]
  );

  return {
    id: result.insertId,
    titulo_episodio,
    url_video,
    anime_id,
    numero,
    descricao,
  };
}

export async function criarAnime({ titulo, descricao, capaPath }) {
  const [result] = await conexao.query(
    `INSERT INTO animes (titulo, descricao, url_capa)
     VALUES (?, ?, ?)`,
    [titulo, descricao, capaPath]
  );

  return {
    id: result.insertId,
    titulo,
    descricao,
    url_capa: capaPath,
  };
}
