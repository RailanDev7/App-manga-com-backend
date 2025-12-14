import 'package:flutter/material.dart';

class Register extends StatelessWidget {
  const Register({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsetsGeometry.symmetric(horizontal: 24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //logo
            Image.asset('assets/logo.png'),
            SizedBox(height: 15),
            //barra para escrever os dados
            TextField(
              decoration: InputDecoration(
                labelText: 'Email',
                hintText: 'Digite seu Email',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 15),
            TextField(
              decoration: InputDecoration(
                labelText: 'Senha',
                hintText: 'Digite uma senha',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 25),
            //botao register
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.deepPurple,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(
                  horizontal: 50,
                  vertical: 15,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10.0),
                ),
              ),
              child: Text('Criar conta'),
            ),
          ],
        ),
      ),
    );
  }
}
