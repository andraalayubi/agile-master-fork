import 'package:flutter/material.dart';
import 'package:flutter_project/view/guide/guide.dart';
import 'dart:math';

import '../../model/story.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  List<String> perusahaan = [];
  List<Story> stories = [];
  final _lightColors = [
    Color(0xAE8C20FF),
    Colors.red,
    Colors.lightGreen,
    Colors.orange.shade300,
  ];
  @override
  void initState() {
    super.initState();
    _loadStories();
  }

  Future<void> _loadStories() async {
    try {
      List<Story> loadStories = await Story.getStory();
      for(int i = 0; i < loadStories.length; i++){
        perusahaan.add(loadStories[i].perusahaan);
      }
      setState(() {
        stories = loadStories;
        perusahaan;
      });
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white70.withOpacity(0.95),
      appBar: AppBar(
        flexibleSpace: const Padding(
          padding: EdgeInsets.all(20.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image(image: AssetImage('assets/home/LOGO1.png')),
              Text(
                'Goship',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 30,
                    fontFamily: 'LibreBaskerville'),
              ),
              Image(width: 50, height: 50,image: AssetImage('assets/home/ProfilePhoto.png'))
            ],
          ),
        ),
      ),
      body: Container(
        padding: const EdgeInsets.all(20.0),
        decoration: const BoxDecoration(color: Color(0x1E1E1E)),
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Align(
              alignment: Alignment.topCenter,
              child: SizedBox(
                height: 80,
                child: ListView.builder(
                  itemCount: perusahaan.length,
                    scrollDirection: Axis.horizontal,
                    itemBuilder: (context, count) {
                      return Column(
                        children: [
                          Container(
                            margin: const EdgeInsets.all(8),
                            width: 70,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                color: _lightColors[ count % _lightColors.length]),
                            child: const Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  '1',
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'DM Sans',
                                      fontSize: 18,
                                      color: Colors.white),
                                ),
                                Text(
                                  'orang',
                                  style: TextStyle(
                                      fontWeight: FontWeight.w500,
                                      fontFamily: 'DM Sans',
                                      fontSize: 14,
                                      color: Colors.white),
                                )
                              ],
                            ),
                          ),
                          Text('${perusahaan[count]}',)
                        ],
                      );
                    }),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top: 20),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Where you're interested?",
                    style: TextStyle(
                        fontWeight: FontWeight.bold, fontFamily: 'DM Sans'),
                  ),
                  Text('Get an internship based on your interests!')
                ],
              ),
            ),
            Container(
              height: MediaQuery.of(context).size.height / 1.8,
                child: ListView.builder(
                    itemCount: stories.length,
                    itemBuilder: (context, index) {
                      return Container(
                        width: 327,
                        height: 250,
                        child: Card(
                          margin: EdgeInsets.only(bottom: 25),
                          shadowColor: Colors.transparent,
                          color: Colors.white,
                          child: Padding(
                            padding: const EdgeInsets.all(20.0),
                            child: Column(
                              children: [
                                Container(
                                  margin: const EdgeInsets.only(bottom: 20),
                                  child: Row(
                                    children: [
                                      Container(
                                          margin:
                                              const EdgeInsets.only(right: 20),
                                          child: const Image(
                                              image: AssetImage(
                                                  'assets/home/LOGO1.png'))),
                                      Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            stories.isNotEmpty
                                                ? stories[index].nama
                                                : "No Data",
                                            style: const TextStyle(
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16,
                                                fontFamily: 'DM Sans'),
                                          ),
                                          Text(stories.isNotEmpty
                                              ? "${stories[index].perusahaan}"
                                              : "No Data", overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10),),
                                          Text(stories.isNotEmpty
                                              ? "${stories[index].posisi}"
                                              : "No Data", overflow: TextOverflow.ellipsis,style: TextStyle(fontSize: 13))
                                        ],
                                      )
                                    ],
                                  ),
                                ),
                                Text(
                                  stories.isNotEmpty
                                      ? stories[index].post
                                      : "No Data",
                                  style: const TextStyle(
                                      fontSize: 16, fontFamily: 'DM Sans'),
                                  overflow: TextOverflow.ellipsis,
                                  softWrap: true,
                                  maxLines: 4,
                                )
                              ],
                            ),
                          ),
                        ),
                      );
                    }),
              ),
          ],
        ),
      ),
    );
  }
}
