import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'PlayerPage.dart';

class AnimePage extends StatelessWidget {
  final int animeId;

  const AnimePage({super.key, required this.animeId});

  static const String baseUrl = 'http://10.0.2.2:3000';

  Future<Map<String, dynamic>> fetchAnime() async {
    final res = await http.get(
      Uri.parse('$baseUrl/router/animes/$animeId'),
    );

    return json.decode(res.body) as Map<String, dynamic>;
  }

  Future<List<dynamic>> fetchEpisodes() async {
    final res = await http.get(
      Uri.parse('$baseUrl/router/animes/$animeId/episodios'),
    );

    return json.decode(res.body) as List<dynamic>;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(backgroundColor: Colors.black),
      body: FutureBuilder(
        future: Future.wait([fetchAnime(), fetchEpisodes()]),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(
              child: Text(
                snapshot.error.toString(),
                style: const TextStyle(color: Colors.white),
              ),
            );
          }

          final anime = (snapshot.data as List)[0] as Map<String, dynamic>;
          final episodes = (snapshot.data as List)[1] as List<dynamic>;

          return ListView(
            children: [
              Image.network(
                '$baseUrl/${anime['url_capa']}',
                height: 240,
                fit: BoxFit.cover,
                errorBuilder: (_, __, ___) => const SizedBox(
                  height: 240,
                  child: Center(
                    child: Icon(Icons.broken_image, color: Colors.white),
                  ),
                ),
              ),

              Padding(
                padding: const EdgeInsets.all(12),
                child: Text(
                  anime['titulo'],
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Text(
                  anime['descricao'],
                  style: const TextStyle(color: Colors.white70),
                ),
              ),

              const Padding(
                padding: EdgeInsets.all(12),
                child: Text(
                  'Episódios',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),

              ...episodes.map<Widget>((ep) {
                return ListTile(
                  title: Text(
                    'Ep ${ep['numero']} - ${ep['titulo_episodio']}',
                    style: const TextStyle(color: Colors.white),
                  ),
                  trailing:
                      const Icon(Icons.play_arrow, color: Colors.white),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => PlayerPage(
                          videoUrl: '$baseUrl/${ep['url_video']}',
                        ),
                      ),
                    );
                  },
                );
              }).toList(),
            ],
          );
        },
      ),
    );
  }
}
