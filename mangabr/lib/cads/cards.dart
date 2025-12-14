import 'package:flutter/material.dart';

class Cards extends StatelessWidget {
  const Cards({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [Card(child: Center(child: Text('data')))],
    );
  }
}
