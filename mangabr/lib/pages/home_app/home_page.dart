import 'package:flutter/material.dart';
import 'package:mangabr/cads/cards.dart';
import 'package:mangabr/models/mangas_modelo.dart';
import 'package:mangabr/service/mangas_service.dart';
import 'package:shared_preferences/shared_preferences.dart';


class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Future<List<MangasModelo>> _futureMangas;

  @override
  void initState() {
    super.initState();
    _futureMangas = MangasService.listarMangas();
  }

  // Função para logout
  Future<void> _logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('logado');
    await prefs.remove('token');

    Navigator.pushReplacementNamed(context, '/login');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MangáBR'),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: _logout,
            tooltip: 'Sair',
          ),
        ],
      ),
      body: FutureBuilder<List<MangasModelo>>(
        future: _futureMangas,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(
              child: Text(
                'Erro ao carregar mangás',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
            );
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('Nenhum mangá encontrado'));
          }

          final mangas = snapshot.data!;

          return GridView.builder(
            padding: const EdgeInsets.all(12),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              childAspectRatio: 0.6,
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
            ),
            itemCount: mangas.length,
            itemBuilder: (context, index) {
              return MangaCard(manga: mangas[index]);
            },
          );
        },
      ),
    );
  }
}
