import 'package:flutter/material.dart';
import 'package:flutter_project/view/guide/guide.dart';
import 'package:flutter_project/view/home/home.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _HomePageState();
}

class _HomePageState extends State<MainScreen> {
  int currentTab = 0;
  List<Widget> screens = [HomePage(), Guide()];
  final PageStorageBucket pageStorageBucket = PageStorageBucket();
  Widget currentScreen = HomePage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white70.withOpacity(0.95),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          backgroundColor: Colors.orange,
          child: Image(
            image: AssetImage('assets/home/center.png'),
          ),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        bottomNavigationBar: BottomAppBar(
          shape: CircularNotchedRectangle(),
          notchMargin: 5.0,
          child: Container(
            height: 60,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Row(children: [MaterialButton(
                  onPressed: (){
                    setState(() {
                      currentScreen = HomePage();
                    });
                  },
                  child: Column(
                    children: [Icon(Icons.home_filled), Text('Home')],
                  ),
                ),],),
                Row(
                  children: [MaterialButton(
                    onPressed: (){
                      setState(() {
                        currentScreen = Guide();
                        currentTab = 1;
                      });
                    },
                    child: Column(
                      children: [Icon(Icons.book), Text('Guide')],
                    ),
                  )],
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
