import 'package:flutter/material.dart';
import 'package:flutter_project/model/mahasiswa.dart';
import 'package:flutter_project/view/list/list_detail_mahasiswa.dart';

class Listmahasiswa extends StatefulWidget {
  final int id_posisi;

  const Listmahasiswa({Key? key, required this.id_posisi}) : super(key: key);

  @override
  _ListmahasiswaState createState() => _ListmahasiswaState();
}

class _ListmahasiswaState extends State<Listmahasiswa> {
  List<Mahasiswa> mahasiswa = [];

  @override
  void initState() {
    super.initState();
    _fetchData(widget.id_posisi);
  }

  Future<void> _fetchData(var id) async {
    mahasiswa = await Mahasiswa.getMahasiswa(id);
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Frontend Dev'),
        titleTextStyle: const TextStyle(
            fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
            onPressed: () {},
            icon: Image.asset(
              'assets/logo/logo-1.png',
              width: 40,
              height: 40,
            ),
          ),
        ],
        backgroundColor: const Color(0xFFFAFAFE),
        toolbarHeight: 100,
        leading: Padding(
          padding: EdgeInsets.only(left: 1, top: 5, bottom: 5),
          child: Card(
            child: ButtonBar(
              children: [
                GestureDetector(
                  onTap: () {
                    // Link
                  },
                  child: Padding(
                    padding: const EdgeInsets.only(right: 8, left: 2),
                    child: Icon(Icons.arrow_back),
                  ),
                ),
              ],
            ),
          ),
        ),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(50),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Expanded(
                  child: Material(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    color: const Color.fromARGB(255, 255, 255, 255),
                    child: const Row(
                      children: <Widget>[
                        Icon(
                          Icons.search,
                          color: Color.fromARGB(255, 0, 0, 0),
                        ),
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.only(right: 10),
                            child: TextField(
                              decoration: InputDecoration.collapsed(
                                hintText: '',
                                hintStyle: TextStyle(
                                  fontSize: 13,
                                  height: 4,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                IconButton(
                  onPressed: () {},
                  icon: Image.asset(
                    'assets/logo/filter-button.png',
                    width: 50,
                    height: 50,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      body: ListView(
        children: [
          Padding(
            padding: EdgeInsets.all(8),
            child: FutureBuilder<List<Mahasiswa>>(
              future: Mahasiswa.getMahasiswa(widget.id_posisi),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                } else if (snapshot.hasError) {
                  return Text('Error: ${snapshot.error}');
                } else if (snapshot.hasData && snapshot.data!.isNotEmpty) {
                  final mahasiswaList = snapshot.data!;
                  return Column(
                    children: mahasiswaList.map((mahasiswa) {
                      return InkWell(
                        onTap: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => ListDetailMahasiswa(
                                      id_siswa: mahasiswa.id_siswa)));
                        },
                        child: Card(
                          color: Color.fromARGB(255, 255, 255, 255),
                          child: Row(
                            children: <Widget>[
                              Column(
                                children: [
                                  Container(
                                    child: Card(
                                      child: ClipRRect(
                                        borderRadius: BorderRadius.circular(10),
                                        child: Image(
                                          image: AssetImage(
                                              'assets/home/ProfilePhoto.png'),
                                          fit: BoxFit.cover,
                                          width: 60,
                                          height: 60,
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Container(
                                    child: Text(
                                      mahasiswa.nama_siswa,
                                      style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 15,
                                      ),
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(right: 65),
                                    child: Row(
                                      children: [
                                        Column(
                                          children: [
                                            Icon(
                                              Icons.mark_email_read_rounded,
                                              size: 20,
                                              color: Colors.grey.shade600,
                                            )
                                          ],
                                        ),
                                        Column(
                                          children: [
                                            Text(
                                              mahasiswa.email,
                                              style: TextStyle(
                                                  color: Colors.grey.shade600),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      );
                    }).toList(),
                  );
                } else {
                  return Center(child: Text('No data available'));
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}
