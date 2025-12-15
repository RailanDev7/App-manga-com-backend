import 'package:flutter/material.dart';
import 'package:mangabr/pages/detalhes.dart';
import '../models/mangas_modelo.dart';


class MangaCard extends StatelessWidget {
  final MangasModelo manga;

  const MangaCard({super.key, required this.manga});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(10),
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (_) => MangaDetalhePage(manga: manga),
          ),
        );
      },
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          AspectRatio(
            aspectRatio: 3 / 4,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.network(
                "http://SEU_IP:3000/${manga.imagem}",
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return const Center(
                    child: Icon(Icons.image_not_supported),
                  );
                },
              ),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            manga.titulo,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontWeight: FontWeight.w600),
          ),
        ],
      ),
    );
  }
}
