import 'package:flutter/material.dart';
import 'package:flutter_project/view/guide/guide.dart';
import 'package:flutter_project/view/home/home.dart';
import 'package:flutter_project/view/list/list_perusahaan.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _HomePageState();
}

class _HomePageState extends State<MainScreen> {
  int currentTab = 0;
  List<Widget> screens = [HomePage(), Guide(), Listperusahaan()];
  final PageStorageBucket pageStorageBucket = PageStorageBucket();
  Widget currentScreen = HomePage();
  Color onPressed = Colors.orange;
  Color notPressed = Colors.grey;
  bool iconPressed = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white70.withOpacity(0.95),
        floatingActionButton: FloatingActionButton(
          elevation: 3,
          onPressed: () {
            setState(() {
              currentScreen = Listperusahaan();
            });
          },
          shape: CircleBorder(),
          backgroundColor: Colors.orange,
          child: Image(
            image: AssetImage('assets/home/center.png'),
          ),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        bottomNavigationBar: BottomAppBar(
          color: Colors.transparent,
          elevation: 3,
          shape: CircularNotchedRectangle(),
          notchMargin: 10.0,
          child: Container(
            height: 60,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Row(
                  children: [
                    MaterialButton(
                      onPressed: () {
                        setState(() {
                          currentScreen = HomePage();
                          onPressed = Colors.orange;
                          notPressed = Colors.grey;
                        });
                      },
                      child: Column(
                        children: [
                          Icon(Icons.home_filled, color: onPressed),
                          Text(
                            'Home',
                            style: TextStyle(color: onPressed),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    MaterialButton(
                      onPressed: () {
                        setState(() {
                          currentScreen = Guide();
                          currentTab = 1;
                          onPressed = Colors.grey;
                          notPressed = Colors.orange;
                        });
                      },
                      child: Column(
                        children: [
                          Icon(
                            Icons.book,
                            color: notPressed,
                            // fill: ,
                          ),
                          Text(
                            'Guide',
                            style: TextStyle(color: notPressed),
                          )
                        ],
                      ),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
        body: PageStorage(
          bucket: pageStorageBucket,
          child: currentScreen,
        ));
  }
}
