import 'dart:collection';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_project/view/list/list_mahasiswa.dart';
import 'package:flutter_project/view/list/list_perusahaan.dart';
import 'package:flutter_project/view/list/database_statis.dart';


class Listintern extends StatelessWidget {
  const Listintern({super.key});

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    return  Scaffold(
      appBar: AppBar(
        title: const Text('GOJEK'),
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
            width: 40,
            height: 40,
          ),
        ),
        ],
      backgroundColor:const Color(0xFFFAFAFE),
      toolbarHeight:65, 
       leading:  Padding(
        padding: EdgeInsets.only(left: 1, top: 5, bottom: 5),
        child: Card(
          child: ButtonBar(
            children: [
            GestureDetector(
              onTap: () {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> const Listperusahaan()));
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
      ),
    body: ListView(
        children: [
          Padding(
            padding: EdgeInsets.all(15.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(child: Card(child: Image(image: AssetImage('assets/onboarding/step1.png'), width: 100 , height: 100))),
                ),
                Column( 
                  children: [
                    Container(
                      padding: EdgeInsets.only(top: 30 ),
                      child: Icon(Icons.gps_fixed, size: 15),
                    ),
                    Container(
                      padding: EdgeInsets.only(),
                      child: Icon(Icons.list_alt_outlined, size: 15),
                    )
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      child: Text(
                        'GOJEK Surabaya',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          fontStyle: FontStyle.italic,
                        ),
                      ),
                    ),
                    Container(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 5),
                        child: Text(
                          'Surabaya, Keputih tegal timur',
                          style: TextStyle(fontSize: 10),
                          textAlign: TextAlign.left,
                        ),
                      ),
                    ),
                    Container(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 5),
                        child: Text(
                          '48 internts ',
                          style: TextStyle(fontSize: 10),
                          textAlign: TextAlign.left,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(15.0),
            child: Container(
              child: Row(
                children: <Widget>[
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Where the place you want?',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 20,
                        ),
                      ),
                      Text('Get an internship based on your interest!'),
                    ],
                  ),
                ],
              ),
            ),
          ),
          Padding(
          padding: EdgeInsets.symmetric(horizontal: 20),
          child: GestureDetector(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder: (context)=> const Listmahasiswa() ));
            },
            child: Card(
              child: Padding(
                padding: EdgeInsets.all(10),
                child: Row(
                  children: <Widget>[
                    Column(
                      children: [
                        Container(
                          padding: EdgeInsets.all(10),
                          child: Text(
                            'Frontend Dev',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                    Column(
                      children: [
                        Container(
                          padding: EdgeInsets.only(left: 70, right: 5, bottom: 10, top: 10),
                          child: Image.asset(
                            'assets/logo/users-account.png',
                            height: 20,
                            width: 20,
                          ),
                        ),
                      ],
                    ),
                    Column(
                      children: [
                        Container(
                          padding: EdgeInsets.only(left: 10, right: 10, bottom: 10, top: 10),
                          child: Text('10 people'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
        ],
      ),
    );
  }
}