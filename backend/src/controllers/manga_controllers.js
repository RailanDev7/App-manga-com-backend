import { listarMangas, buscarMangaPorIdService } from '../services/mangas_service.js';

// Lista todos os mangás
export async function listarMangasController(req, res) {
  try {
    const mangas = await listarMangas();
    res.json(mangas);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar mangás' });
  }
}

// Buscar mangá por id
export async function buscarMangaPorId(req, res) {
  try {
    const { id } = req.params;
    const manga = await buscarMangaPorIdService(id);
    if (!manga) return res.status(404).json({ message: 'Mangá não encontrado' });
    res.json(manga);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar mangá' });
  }
}

// Salvar mangá (upload da capa já feito pelo Multer)
