import { buscaAnimeId } from '../services/anime_services.js';

export async function AnimeId(req, res) {
  try {
    const id = req.params.id;

    const anime = await buscaAnimeId(id);

    if (!anime) {
      return res.status(404).json({ message: 'Anime não encontrado' });
    }

    return res.status(200).json(anime);

  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}
