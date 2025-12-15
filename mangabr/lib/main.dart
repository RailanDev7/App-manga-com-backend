import 'package:flutter/material.dart';
import 'package:mangabr/pages/auth_pages/login.dart';
import 'package:mangabr/pages/auth_pages/register.dart';
import 'package:mangabr/pages/welcome_page.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final prefs = await SharedPreferences.getInstance();
  final bool jaViuIntro = prefs.getBool('jaViuIntro') ?? false;

  runApp(MyApp(jaViuIntro: jaViuIntro));
}

class MyApp extends StatelessWidget {
  final bool jaViuIntro;
  const MyApp({super.key, required this.jaViuIntro});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(brightness: Brightness.dark),

      initialRoute: jaViuIntro ? '/login' : '/intro',

      routes: {
        '/intro': (context) => const IntroPage(),
        '/login': (context) => const LoginPage(),
        '/register': (context) => const Register(),
      },
      home: IntroPage(),
    );
  }
}
