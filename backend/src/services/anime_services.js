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

export async function criarAnime({ titulo, descricao, url_capa }) {
  const [result] = await conexao.query(
    'INSERT INTO animes (titulo, descricao, url_capa) VALUES (?, ?, ?)',
    [titulo, descricao, url_capa]
  );

  return result;
}

export async function criarAnime({ titulo, descricao, url_capa }) {
  const [result] = await conexao.query(
    'INSERT INTO animes (titulo, descricao, url_capa) VALUES (?, ?, ?)',
    [titulo, descricao, url_capa]
  );

  return result;
}