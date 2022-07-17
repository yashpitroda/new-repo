import 'package:flutter/material.dart';
import 'dart:math';
import 'package:flutter/src/painting/image_resolution.dart';
//here we have less elemnt 
//if we have more elemet to animate -- in this method elemet are render screen again again//so we use animated builder//je vstu ne animation apvanu hoy tene aniamted buider na wigits ma wrap kari dai e 
//-- so using  animated buider -- screen as it si bani rahese -- only je eleemnt ne animate karvano hoy te j randr thay che //is has less load
class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  // TickerProviderStateMixin -- for multiple animation
  // SingleTickerProviderStateMixin -- for single animation

  int leftDiceNumber = 1;
  int rightDiceNumber = 1;
  AnimationController _controller; //_ denote private variablr
CurvedAnimation animation;
  @override
  void initState() {
    //initstate e relod time e call no thay
    // TODO: implement initState
    super.initState();
    //basic
    // _controller = AnimationController(
    //     duration: Duration(seconds: 1),
    //     vsync:
    //         this); //this mean SingleTickerProviderStateMixin is asign to vsync
    // _controller.forward();
    // // _controller.reverse();
    // _controller.addListener(() {
    //   print(_controller.value);
    // });

    // //_controller.value-- _controller.value e 0 to 1 jay ,1 e end -- is depend on duration time -- jo duration 1 second hase toh 0 to 1 pochava ma numbe gap avadhu ahse
    // // and duration 10 sec mate _controller.value ne 0 to 1 ava am gap ocho ahse //vadhu value ave
    // //_controller.value ni value 1 thay pachi j AnimationStatus.completed vadu status avi jay che
    // _controller.addStatusListener((status) {
    //   if (status == AnimationStatus.completed) {
    //     print("\ncompleted");
    //   }
    // });
    animete();
  }

  animete() {
    _controller = AnimationController(
        duration: Duration(seconds: 1),
        vsync:
            this); //this mean SingleTickerProviderStateMixin is asign to vsync
    // _controller.forward(); //bcz it use in roll function
    // _controller.reverse();//revese and forword e controler ni proerty che
     animation=CurvedAnimation(parent: _controller,curve: Curves.bounceOut);//Curves.bounceOut is a animation in flutter curve class animation
   
    // _controller.addListener(() {//before
    animation.addListener(() { //after inislize CurvedAnimation
      setState(() {


      });
      print(_controller.value);
    });

    //_controller.value-- _controller.value e 0 to 1 jay ,1 e end -- is depend on duration time -- jo duration 1 second hase toh 0 to 1 pochava ma numbe gap avadhu ahse
    // and duration 10 sec mate _controller.value ne 0 to 1 ava am gap ocho ahse //vadhu value ave
    //_controller.value ni value 1 thay pachi j AnimationStatus.completed vadu status avi jay che
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        setState(() {
          //runig app ma jo setstate call thay toh it will change the value while runing the app and do build method is rebuild or restart

          //  leftDiceNumber =Random().nextInt(7);//give us random number between 0 to 6// not 7
          //  leftDiceNumber =Random().nextInt(4);//give us random number between 0 to 3// not 4
          //  leftDiceNumber =Random().nextInt(10);//give us random number between 0 to 9// not 10

          //but we need number between 1 to 6/not 0 to 6

          leftDiceNumber = Random().nextInt(6) +
              1; //give us random number between 0 to 9// not 10
          rightDiceNumber = Random().nextInt(6) + 1;
        });
        //completed -- _controller.value e 1 thay toh tyare reverse ma chalvo
        // if (status == AnimationStatus.dismissed) { //
        print("\ncompleted");
        _controller
            .reverse(); //thresold lagadi ne perticuleer time thi pan reverse kari sakiye
      }
      // //bane if ave to infinit loop bani jay
      // if (status == AnimationStatus.dismissed) {//dismissed -- _controller.value e 0 thay toh tyare forward ma chalvo

      //   print("\ncompleted");
      //   _controller.forward();//thresold lagadi ne perticuleer time thi pan reverse kari sakiye
      // }
    });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    _controller
        .dispose(); //aa page per thi exit thai e tyre controlor ni proger delete thai jasse
  }

  void roll() {
    _controller.forward();
    // setState(() {//jo new dice in image ahi thi change thay toh pele imge change thay pachi animation ave pan animation complete thay pachi new dicess ni image change thavi joy // so that aa initstate nemove karine AnimationStatus.completed ma add kariyu
    //   //runig app ma jo setstate call thay toh it will change the value while runing the app and do build method is rebuild or restart

    //   //  leftDiceNumber =Random().nextInt(7);//give us random number between 0 to 6// not 7
    //   //  leftDiceNumber =Random().nextInt(4);//give us random number between 0 to 3// not 4
    //   //  leftDiceNumber =Random().nextInt(10);//give us random number between 0 to 9// not 10

    //   //but we need number between 1 to 6/not 0 to 6

    //   leftDiceNumber = Random().nextInt(6) +
    //       1; //give us random number between 0 to 9// not 10
    //   rightDiceNumber = Random().nextInt(6) + 1;
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Dicee")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              children: [
                Expanded(
                  //on dubble tap gesture e image per lagavel che
                  child: GestureDetector(
                    onDoubleTap:
                        roll, //img per dubble tap thi pan image change thay
                    //press dubble tap
                    child: Padding(
                      padding: EdgeInsets.all(15.0),
                      child: Image(
                        height: 200 -
                            (animation.value) *
                                200,//animation is done with the help of this // 200 - ma 200 che e image size denote kare so image size mathi (_controller.value) *200 atlu minus thay//_controller.value is go to 0 to 1 and in reverse 1 to 0
                        image: AssetImage(
                            "assets/images/dice-png-$leftDiceNumber.png"),
                      ),
                    ),
                  ),
                ),
                Expanded(
                  // flex: 2,//first expended karta this is dubble
                  child: GestureDetector(
                    onDoubleTap: roll,
                    child: Padding(
                      padding: EdgeInsets.all(15.0),
                      child: Image(
                         height: 200 -
                            (animation.value) *
                                200,//animation is done with the help of this // 200 - ma 200 che e image size denote kare so image size mathi (_controller.value) *200 atlu minus thay//_controller.value is go to 0 to 1 and in reverse 1 to 0
                        image: AssetImage(
                            "assets/images/dice-png-$rightDiceNumber.png"),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            RaisedButton(
              onPressed: roll,
              padding: EdgeInsets.symmetric(horizontal: 22.0, vertical: 12.0),
              color: Colors.black,
              elevation: 5.0,
              highlightElevation: 12.0,
              highlightColor: Colors.grey[700],
              splashColor: Colors.grey[700],
              child: Text(
                "Roll",
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold),
              ),
            ),
            
          ],
        ),
      ),
    );
  }
}
