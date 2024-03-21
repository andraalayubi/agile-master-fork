class Mahasiswa {
  String? nama;
  String? email;
  String? imagePath; 

  Mahasiswa({required this.nama, required this.email, required this.imagePath});
}

class Perusahaan {
  String? nama;
  String? imagePath;

  Perusahaan({required this.nama, required this.imagePath});
}

List<Perusahaan> dataPerusahaan = [
  Perusahaan(nama: 'GOJEK', imagePath: 'assets/logo/image-1.png' ),
  Perusahaan(nama: 'SHOPEE', imagePath: 'assets/logo/image-1.png' ),
  Perusahaan(nama: 'LAZADA', imagePath: 'assets/logo/image-1.png' ),
  Perusahaan(nama: 'TELKOMSEL', imagePath: 'assets/logo/image-1.png' ),
  Perusahaan(nama: 'GRAB', imagePath: 'assets/logo/image-1.png' ),
];

List<Mahasiswa> dataMahasiswa = [
  Mahasiswa(nama: 'Anantasya Aghni', email: 'anantasya12@gmail.com', imagePath:'assets/logo/image-1.png' ),
  Mahasiswa(nama: 'Indiana Zulfi A', email: 'anantasya12@gmail.com', imagePath:'assets/logo/image-2.png' ),
  Mahasiswa(nama: 'Faris Zein Fahreza', email: 'anantasya12@gmail.com', imagePath:'assets/logo/image-3.png' ),
  Mahasiswa(nama: 'Ananta Dania', email: 'anantasya12@gmail.com', imagePath:'assets/logo/image-4.png' ),
  Mahasiswa(nama: 'Soke Bahtera', email: 'anantasya12@gmail.com', imagePath:'assets/logo/image-5.png' ),
];
