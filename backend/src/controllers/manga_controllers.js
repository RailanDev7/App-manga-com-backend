
import { listarMangasService, buscarMangaPorIdService } from '../services/mangas_services.js'


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
    
