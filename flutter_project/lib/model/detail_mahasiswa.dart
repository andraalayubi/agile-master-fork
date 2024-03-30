import 'dart:ffi';
import 'dart:convert';
import 'package:http/http.dart' as http;

class DetailMahasiswa {
  String nama;
  String email;
  int nrp;
  int no_telp;
  String nama_perusahaan;
  String alamat;
  String nama_posisi;
  String durasi_magang;
  Bool is_uang_saku;
  String judul_laporan;

  DetailMahasiswa({required this.nama, required this.email, required this.nrp, required this.no_telp, required this.nama_perusahaan, required this.alamat, required this.nama_posisi, required this.durasi_magang, required this.is_uang_saku, required this.judul_laporan});

  factory DetailMahasiswa.fromJson(Map<String, dynamic> json) {
    return DetailMahasiswa(
      nama: json['nama_siswa'],
      email: json['email'],
      nrp: json['nrp'],
      no_telp: json['no_telp'],
      nama_perusahaan: json['nama_perusahaan'],
      alamat: json['alamat'],
      nama_posisi: json['nama_posisi'],
      durasi_magang: json['durasi_magang'],
      is_uang_saku: json['is_uang_saku'],
      judul_laporan: json['judul_laporan'],
    );
  }

  static Future<List<DetailMahasiswa>> getDetailMahasiswa(int idSiswa) async {
    Uri url = Uri.parse('http://103.127.135.153:5000/api/user/$idSiswa');
    var apiResult = await http.get(url);
    var jsonData = json.decode(apiResult.body) as List<dynamic>;

    // Mengubah List<dynamic> menjadi List<Perusahaan>
    List<DetailMahasiswa> detailMahasiswa =
        List<DetailMahasiswa>.from(jsonData.map((x) => DetailMahasiswa.fromJson(x)));

    return detailMahasiswa;
  }
}