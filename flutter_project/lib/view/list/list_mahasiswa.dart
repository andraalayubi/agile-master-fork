import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_project/view/list/list_intern.dart';
import 'package:flutter_project/view/list/database_statis.dart';

class Listmahasiswa extends StatelessWidget {
  const Listmahasiswa({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Frontend Dev'),
        titleTextStyle: const TextStyle(
          fontSize: 20, 
          fontWeight: FontWeight.bold, 
          color: Colors.black
        ),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
          onPressed: () { },
          icon: Image.asset(
            'assets/logo/logo-1.png',
            width: 40,
            height: 40,
          ),
        ),
        ],
      backgroundColor:const Color(0xFFFAFAFE),
      toolbarHeight: 100, 
      leading:  Padding(
        padding: EdgeInsets.only(left: 1, top: 5, bottom: 5),
        child: Card(
          child: ButtonBar(
            children: [
            GestureDetector(
              onTap: () {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> const Listintern()));
              },
              child: Padding(
                padding: const EdgeInsets.only(right: 8,left: 2),
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
          padding: const EdgeInsets.symmetric(horizontal: 30, vertical:10),
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
                              hintText: 'cari perusahaan yang diinginkan',
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
      body: ListView.builder(
  padding: EdgeInsets.all(8),
  itemCount: dataMahasiswa.length, // Ganti dataMahasiswa dengan data Anda
  itemBuilder: (BuildContext context, int index) {
    return InkWell(
      onTap: () {},
      child: Card(
        color: Color.fromARGB(255, 255, 255, 255),
        child: Row(
          children: <Widget>[
            Column(
              children: [
                Container(
                 
                  child: Card(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(10), // Mengatur border circular
                      child: Image(
                        image: AssetImage(dataMahasiswa[index].imagePath),
                        fit: BoxFit.cover, 
                        width: 60,
                        height: 60,// Mengatur agar gambar memenuhi luas card
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
                      dataMahasiswa[index].nama, // Ganti dengan data Anda
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
                            Icons.mark_email_read_rounded, size: 20,
                            color: Colors.grey.shade600,
                          )],
                      ),
                      Column(
                        children: [
                          Text(
                            dataMahasiswa[index].email,
                            style: TextStyle(
                              color: Colors.grey.shade600
                            ),
                        )], // Ganti dengan data Anda
                      )
                    ],
                  ),
                )
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