import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:shared_preferences/shared_preferences.dart';

class IntroPage extends StatelessWidget {
  const IntroPage({super.key});

  Future<void> _irParaLogin(BuildContext context) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('jaViuIntro', true);

    Navigator.pushReplacementNamed(context, '/login');
  }

  Future<void> _irParaRegister(BuildContext context) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('jaViuIntro', true);

    Navigator.pushReplacementNamed(context, '/register');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            children: [
              const SizedBox(height: 40),

              Lottie.asset('assets/lottie/sla.json', height: 250),

              const SizedBox(height: 15),

              const Text(
                'Bem-vindo ao seu universo de mangás',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),

              const SizedBox(height: 12),

              const Text(
                'Descubra novas histórias, acompanhe seus favoritos e mergulhe em aventuras inesquecíveis.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 15,
                  color: Colors.deepPurple,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 60,),


              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => _irParaLogin(context),
                  child: const Text('Entrar'),
                ),
              ),

              const SizedBox(height: 12),

              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: () => _irParaRegister(context),
                  child: const Text('Criar conta'),
                ),
              ),

              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
