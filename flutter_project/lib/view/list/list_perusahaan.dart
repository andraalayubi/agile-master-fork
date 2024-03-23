import 'package:flutter/material.dart';
import 'package:flutter_project/view/home/home.dart';
import 'package:flutter_project/view/list/intern.dart';
import 'package:flutter_project/view/list/perusahaan.dart';
import 'package:flutter_project/view/list/list_intern.dart';

class Listperusahaan extends StatefulWidget {
  const Listperusahaan({Key? key}) : super(key: key);

  @override
  State<Listperusahaan> createState() => _ListPerusahaanState();
}

class _ListPerusahaanState extends State<Listperusahaan> {
  List<Perusahaan> perusahaan = [];

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  Future<void> _fetchData() async {
    perusahaan = await Perusahaan.getPerusahaan();
    setState(() {});
  }

  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      // Your existing AppBar and bottom search/filter UI (unchanged)
      appBar: AppBar(
        title: const Text('Goship'),
        titleTextStyle: const TextStyle(
          fontSize: 25,
          fontWeight: FontWeight.bold,
          fontFamily: 'LibreBaskerville',
          color: Colors.black,
        ),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
            onPressed: (){
              Navigator.push(context, MaterialPageRoute(builder: (context)=>HomePage())
              );
            },
            icon: Image(
              image: AssetImage('assets/logo/logo-1.png'),
              height: 60,
              width: 60,
            ),
          ),
        ],
        backgroundColor: const Color.fromARGB(255, 255, 255, 255),
        toolbarHeight: 90,
        leading: const Padding(
          padding: EdgeInsets.only(left: 1),
          child: Card(
            child: Icon(Icons.arrow_back),
          ),
        ),
        bottom: PreferredSize(
        preferredSize: const Size.fromHeight(50),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 45, vertical:5),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Material(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  color: Colors.grey.shade200,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Icon(
                          Icons.search,
                          color: Color.fromARGB(255, 0, 0, 0),
                        ),
                      ),
                      Expanded(
                        child: Padding(
                          padding: EdgeInsets.only(right: 10),
                          child: TextField(
                            decoration: InputDecoration.collapsed(
                              hintText: 'cari perusahaan',
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
      body: perusahaan.isEmpty
          ? const Center(child: CircularProgressIndicator()) // Show loading indicator while fetching
          : ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: perusahaan.length,
              itemBuilder: (BuildContext context, int index) {
                return InkWell(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => Listintern(
                          namaPerusahaan: perusahaan[index].nama_perusahaan,
                          namaPosisi: perusahaan[index].nama_posisi,
                          
                        ),
                      ),
                    );
                  },
                  child: Card(
                    color: const Color.fromARGB(255, 255, 255, 255),
                    child: Row(
                      children: <Widget>[
                        Card(
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(10),
                            child: Image(
                              image: AssetImage('assets/logo/logo-1.png'), // Replace with logo placeholder or image asset
                              fit: BoxFit.cover,
                              width: 55,
                              height: 55,
                            ),
                          ),
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.only(left: 5),
                              child: Text(
                                perusahaan[index].nama_perusahaan, // Use fetched company name
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 13,
                                  fontFamily: 'DM Sans',
                                ),
                              ),
                            ),
                          Padding(
                            padding: const EdgeInsets.all(5.0),
                            child: Text(
                              perusahaan[index].nama_posisi,style: TextStyle(
                                fontFamily: 'DM Sans',
                              ),
                              ),
                          ),
                          ],
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
    );
  }
}
