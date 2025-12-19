import { buscaAnimeId, buscaAnime, criarEpisodio, criarAnime } from '../services/anime_services.js';

export async function AnimeId(req, res) {
  try {
    const { id } = req.params;

    const anime = await buscaAnimeId(id);

    if (!anime) {
      return res.status(404).json({ message: 'Anime não encontrado' });
    }

    return res.status(200).json(anime);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}

export async function buscaTeste(req, res) {
  try {
    const animes = await buscaAnime();

    if (!animes || animes.length === 0) {
      return res.status(404).json([]);
    }

    return res.status(200).json(animes);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}

export async function uploadVideo(req, res) {
  try {
    const { titulo_episodio, anime_id, numero, descricao } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Vídeo obrigatório' });
    }

    const url_video = `uploads/videos/${req.file.filename}`;

    const episodio = await criarEpisodio({
      titulo_episodio,
      url_video,
      anime_id,
      numero,
      descricao,
    });

    return res.status(201).json(episodio);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}




export async function criarAnimeController(req, res) {
  try {
    const { titulo, descricao } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Capa obrigatória' });
    }

    const capaPath = `uploads/capas/${req.file.filename}`;

    const anime = await criarAnime({
      titulo,
      descricao,
      capaPath,
    });

    return res.status(201).json(anime);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao criar anime' });
  }
}
