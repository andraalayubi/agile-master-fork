import 'dart:convert';
import 'package:http/http.dart' as http;

class Intern {
  int id_posisi;
  int jumlah_siswa;
  String provinsi;
  String kota;
  String logo_perusahaan;
  String nama_perusahaan;
  String nama_posisi;

  Intern(
    {required this.id_posisi,
    required this.nama_perusahaan,
    required this.nama_posisi,
    required this.jumlah_siswa,
    required this.kota,
    required this.logo_perusahaan,
    required this.provinsi}
  );

 factory Intern.fromJson(Map<String, dynamic> json) {
    return Intern(
      id_posisi: json['id_posisi'],
      nama_perusahaan: json['nama_perusahaan'],
      nama_posisi: json['nama_posisi'],
      kota: json['kota'],
      provinsi: json['provinsi'],
      logo_perusahaan: json['logo_perusahaan'],
      jumlah_siswa: json['jumlah_siswa'],
    );
  }


  static Future<List<Intern>> getIntern() async {
  // Ganti URL dengan URL API Anda
  Uri url = Uri.parse('http://103.127.135.153:5000/api/perusahaan/id_perusahaan');
  var apiResult = await http.get(url);
  var jsonData = json.decode(apiResult.body) as List<dynamic>;
  List<Intern> intern = [];

  for (var data in jsonData) {
    intern.add(Intern.fromJson(data));
  }

  return intern;
}
}

