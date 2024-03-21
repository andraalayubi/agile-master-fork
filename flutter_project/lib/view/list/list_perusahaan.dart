import 'dart:collection';
import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_project/view/List/list_intern.dart';
import 'package:flutter_project/view/list/database_statis_perusahaan.dart';
import 'package:flutter_project/view/onboarding/onboarding.dart';


class Listperusahaan extends StatelessWidget {
  const Listperusahaan({super.key});

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: const Text('GOSHIP'),
        titleTextStyle: const TextStyle(
          fontSize: 30, 
          fontWeight: FontWeight.bold, 
          color: Colors.black
        ),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
          onPressed: () { },
          icon: Image.asset(
            'assets/logo/logo-1.png',
              height: 40,
              width: 40,
          ),
        ),
        ],
      backgroundColor:const Color(0xFFFAFAFE),
      toolbarHeight: 100, 
      leading:  const Padding(
        padding: EdgeInsets.only(left: 1, top: 5, bottom: 5),
        child: Card(
          child: Icon(Icons.arrow_back),
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
                  child: Row(
                    children: <Widget>[
                      const Icon(
                        Icons.search,
                        color: Color.fromARGB(255, 0, 0, 0),
                      ),
                      Expanded(
                        child: TextField(
                          
                          textAlign: TextAlign.center,
                          decoration: InputDecoration.collapsed(
                            hintText: 'cari perusahaan yang diinginkan',
                            hintStyle: TextStyle(
                              fontSize: 13,
                              height: 4,
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
  padding: const EdgeInsets.all(8),
  itemCount: dataPerusahaan.length,
  itemBuilder: (BuildContext context, int index) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const Listintern()),
        );
      },
      child: Card(
        color: Colors.white,
        child: Row(
          children: <Widget>[
            Card(
              child: ClipRRect(
                      borderRadius: BorderRadius.circular(10), // Mengatur border circular
                      child: Image(
                        image: AssetImage(dataPerusahaan[index].image),
                        fit: BoxFit.cover, 
                        width: 60,
                        height: 60,// Mengatur agar gambar memenuhi luas card
                      ),
                    ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.only(left: 5),
                  child: Text(
                    dataPerusahaan[index].name,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                ),
                const Text('・Frontend Dev'),
                const Text('・UI/UX Designer'),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(top: 30),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('・Backend Dev'),
                  Text('・Data Analytist'),
                ],
              ),
            )
          ],
        ),
      ),
    );
  },
),

    );
  }
}