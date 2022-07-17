import 'package:flutter/material.dart';
import 'package:rolling_Dice/homescreen.dart';

void main() {
  runApp(
    MyApp(),
  );
}
class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,//remove debug banner in app
      home : HomeScreen(),);
  }
}
