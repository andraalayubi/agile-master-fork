import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: const Row(
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
            Image(image: AssetImage('assets/home/ProfilePhoto.png'))
          ],
        ),
      ),
      body: Container(
        decoration: BoxDecoration(color: Color(0x1E1E1E)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              height: 105,
              child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemBuilder: (context, count) {
                    count = 5;
                    return Container(
                      margin: const EdgeInsets.all(13),
                      width: 105,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.orange),
                      child: const Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            '12',
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontFamily: 'DM Sans',
                                fontSize: 27,
                                color: Colors.white),
                          ),
                          Text(
                            'orang',
                            style: TextStyle(
                                fontWeight: FontWeight.w500,
                                fontFamily: 'DM Sans',
                                fontSize: 18,
                                color: Colors.white),
                          )
                        ],
                      ),
                    );
                  }),
            ),
            const Column(
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
            Card(
              shadowColor: Colors.transparent,
              color: Colors.transparent,
              child: Column(
                children: [
                  Row(
                    children: [Image(image: AssetImage('assets/home/LOGO1.png')),
                      Column(children: [Text('data'), Text('data')],)
                    ],
                  ),
                  Text('Lorem')
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
