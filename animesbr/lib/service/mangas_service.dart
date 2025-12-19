import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/mangas_modelo.dart';

class MangasService {
  static const baseUrl = "http://10.0.2.2:3000/app/mangas";

  static Future<List<MangasModelo>> listarMangas() async {
    final response = await http.get(
      Uri.parse("$baseUrl/mangas"),
    );

    final List data = json.decode(response.body);
    return data.map((e) => MangasModelo.fromJson(e)).toList();
  }
}
