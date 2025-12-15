import 'package:flutter/material.dart';
import '../models/mangas_modelo.dart';

class MangaDetalhePage extends StatelessWidget {
  final MangasModelo manga;

  const MangaDetalhePage({super.key, required this.manga});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(manga.titulo),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            AspectRatio(
              aspectRatio: 3 / 4,
              child: Image.network(
                "http://SEU_IP:3000/${manga.imagem}",
                fit: BoxFit.cover,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Text(
                manga.descricao,
                style: const TextStyle(fontSize: 16),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
