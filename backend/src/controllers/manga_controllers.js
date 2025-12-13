
import { listarMangasService, buscarMangaPorIdService, salvarMangaService } from '../services/mangas_services.js'


export async function ListarMangas(req, res) {

    try {
        const mangas = await listarMangasService()
            return res.json(mangas)

        } catch(error){
            return res.status(500).json({ erro: "Erro ao listar mangás" });
        }
    }
 
export async function buscarMangaPorId(req, res) {
    try {
        const { id } = req.params;
        const manga = await buscarMangaPorIdService(id);

        if(!manga){
            return res.status(404).json({ erro: "Mangá não encontrado"})
        }
        return res.json(manga);
    } catch(error){
        res.status(500).json({ Message: "Erro no servidor"})
    }
    
}   
    
export async function salvarMangaController(req, res) {
    try {
        const { nome, descricao } = req.body;
        const imageUrl = req.file ? `/uploads${req.file.filename}` : null;

        const id = await salvarMangaService(nome, descricao, imageUrl);

        return res.status(201).json({
            message: "Mangá salvo!",
            id,
            nome,
            descricao,
            capa: imageUrl
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Erro ao salvar o mangá" });
    }
}
