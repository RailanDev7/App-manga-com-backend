class MangasModelo {
  final int id;
  final String titulo;
  final String descricao;
  final String imagem;

  MangasModelo({
    required this.id,
    required this.titulo,
    required this.descricao,
    required this.imagem,
  });

  factory MangasModelo.fromJson(Map<String, dynamic> json) {
    return MangasModelo(
      id: json['id'],
      titulo: json['titulo'],
      descricao: json['descricao'],
      imagem: json['imagem'],
    );
  }
}
