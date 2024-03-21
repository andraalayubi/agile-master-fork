import 'dart:collection';
import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_project/view/list/list_intern.dart';
import 'package:flutter_project/view/onboarding/onboarding.dart';
import 'package:flutter_project/view/list/database_statis.dart';

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

    
    body: ListView(
      padding: const EdgeInsets.all(8),
      children: <Widget>[
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              InkWell(
              onTap: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const Listintern ()));
              },
                child: Card(
                  color: Colors.white,      
                  child: Row(
                    children: <Widget>[
                    Card(
                        color: Colors.white,
                        shadowColor: const Color.fromARGB(179, 10, 10, 10),
                        child:  SizedBox(

                          width: 80,
                          height: 80,
                          child: Image.asset('assets/onboarding/step1.png'),
                          ),
                        ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        
                        Container(    
                        padding: const EdgeInsets.only(left: 5),                
                        child: const Text(
                          'GOJEK',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 20
                            ),
                        ),
                        ),
                        const Text('・Frontend Dev'),
                        const Text('・UI/UX Designer',
                        )
                        ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          padding: const EdgeInsets.only(top: 30, ),
                          child: const Text('・Backend Dev'),
                        ),
                        const Text('・Data Analytist'),
                    ],)
                    ],
                  ),
                ),
              )
            ],
          ),
      ],
    ),
    );
  }
}