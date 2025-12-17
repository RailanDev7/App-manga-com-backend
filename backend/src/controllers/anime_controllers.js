import { buscaAnimeId, buscaAnime, criarAnime} from '../services/anime_services.js';

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
export async function criarAnimeController(req, res) {
  try {
    const { titulo, descricao } = req.body;
    const imagem = req.file;

    if (!titulo || !descricao || !imagem) {
      return res.status(400).json({ message: 'Dados incompletos' });
    }

    const url_capa = `src/uploads/${imagem.filename}`;

    await criarAnime({
      titulo,
      descricao,
      url_capa,
    });

    return res.status(201).json({ message: 'Anime criado com sucesso' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}