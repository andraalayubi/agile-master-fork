import 'dart:convert';
import 'package:http/http.dart' as http;

class Perusahaan {
  int id_perusahaan;
  String nama_perusahaan;
  String nama_posisi;

  Perusahaan(
    {required this.id_perusahaan,
    required this.nama_perusahaan,
    required this.nama_posisi}
  );

 factory Perusahaan.fromJson(Map<String, dynamic> json) {
    return Perusahaan(
      id_perusahaan: json['id_perusahaan'],
      nama_perusahaan: json['nama_perusahaan'],
      nama_posisi: json['nama_posisi'],
    );
  }


  static Future<List<Perusahaan>> getPerusahaan() async {
  // Ganti URL dengan URL API Anda
  Uri url = Uri.parse('http://103.127.135.153:5000/api/perusahaan');
  var apiResult = await http.get(url);
  var jsonData = json.decode(apiResult.body) as List<dynamic>;
  List<Perusahaan> perusahaan = [];

  for (var data in jsonData) {
    perusahaan.add(Perusahaan.fromJson(data));
  }

  return perusahaan;
}
}

