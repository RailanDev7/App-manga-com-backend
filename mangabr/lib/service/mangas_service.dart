import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/mangas_modelo.dart';

class MangasService {
  final String baseUrl = 'http://10.0.2.2:3000';

  Future<List<MangasModelo>> listarMangas() async {
    final response =
        await http.get(Uri.parse('$baseUrl/app/mangas/'));

    if (response.statusCode == 200) {
      final List<dynamic> jsonList = jsonDecode(response.body);

      return jsonList
          .map((json) => MangasModelo.fromJson(json))
          .toList();
    } else {
      throw Exception('Erro ao buscar mangas');
    }
  }
}
