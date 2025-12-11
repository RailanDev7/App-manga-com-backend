
import { listarMangasService, buscarMangaPorIdService } from '../services/mangas_services.js'


export async function ListarMangas(req, res) {

    try {
        const mangas = await listarMangasService()
            return res.json(mangas)

        } catch(error){
            return res.status(500).json({ erro: "Erro ao listar mangás" });
        }
    }
 
    
    
