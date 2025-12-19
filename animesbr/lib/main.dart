import 'package:flutter/material.dart';
import 'pages/auth_pages/login.dart';
import 'pages/auth_pages/register.dart';
import 'pages/home_app/home_page.dart';
import 'pages/welcome_page.dart';
import 'package:shared_preferences/shared_preferences.dart';
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final prefs = await SharedPreferences.getInstance();
  final bool jaViuIntro = prefs.getBool('jaViuIntro') ?? false;
  final bool logado = prefs.getBool('logado') ?? false;

  runApp(MyApp(
    jaViuIntro: jaViuIntro,
    logado: logado,
  ));
}

class MyApp extends StatelessWidget {
  final bool jaViuIntro;
  final bool logado;
  const MyApp({super.key, required this.jaViuIntro, required this.logado});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(brightness: Brightness.dark),
      home: HomePage(),
    );
  }
}
