import 'package:flutter/material.dart';
import 'package:mangabr/pages/auth_pages/register.dart';
import 'package:mangabr/pages/welcome_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        brightness: Brightness.dark
      ),
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}