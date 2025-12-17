import { Router } from 'express';
import { conexao } from '../database/connection';


const animes = Router();

export async function buscaAnimeId(id) {
    const [rows] = await conexao.query('SELECT titulo, descricao, url_capa FROM animes WHERE id = ?', [id])
    
};
return rows[0];


export default animes;
