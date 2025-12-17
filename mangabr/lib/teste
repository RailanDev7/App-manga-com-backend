import 'package:flutter/material.dart';
import 'package:mangabr/pages/auth_pages/login.dart';
import 'package:mangabr/pages/auth_pages/register.dart';
import 'package:mangabr/pages/home_app/home_page.dart';
import 'package:mangabr/pages/welcome_page.dart';
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
      initialRoute: !jaViuIntro
          ? '/intro'
          : logado
              ? '/home'
              : '/login',
      routes: {
        '/intro': (context) => const IntroPage(),
        '/login': (context) => const LoginPage(),
        '/register': (context) => const Register(),
        '/home': (context) => const HomePage(),
      },
    );
  }
}
