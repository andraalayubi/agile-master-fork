import 'dart:convert';
import 'package:http/http.dart' as http;

class Perusahaan {
  int id_perusahaan;
  String nama_perusahaan;
  String nama_posisi;

  Perusahaan({
    required this.id_perusahaan,
    required this.nama_perusahaan,
    required this.nama_posisi,
  });

  factory Perusahaan.fromJson(Map<String, dynamic> json) {
    return Perusahaan(
      id_perusahaan: json['id_perusahaan'],
      nama_perusahaan: json['nama_perusahaan'],
      nama_posisi: json['nama_posisi'],
    );
  }
}

Future<List<Perusahaan>> fetchPerusahaan() async {
  final response = await http.get(Uri.parse('http://103.127.135.153:5000/api/perusahaan'));
  
  if (response.statusCode == 200) {
    List<dynamic> jsonData = json.decode(response.body);
    return jsonData.map((json) => Perusahaan.fromJson(json)).toList();
  } else {
    throw Exception('Failed to load data from API');
  }
}
