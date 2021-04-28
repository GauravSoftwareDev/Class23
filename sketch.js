const Engine= Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var myEng, myLand, ball, ground;
/*
1. create an Engine--Matter.Engine.create();
2. add engine to the world -myLand = 
3. update the engine in function draw-- Engine.update(myEng);

4. createbodies - Bodies.rectangle(x,y,width, height, options);
5. add the body to the world. World.add(myLand, ball);

6. rect(ball.position.x...)
*/


var box1;
var box2;
var baseground;

function setup() {
  createCanvas(800,400);

  myEng = Engine.create();
  myLand = myEng.world

  box1 = new Box(200,200,70,70);
  box2 = new Box(300,200,70,70);
 
  baseground = new Ground(400,390,800,10);
  
}

function draw() {
  background("lightblue");  
  
Engine.update(myEng);

box1.display();
box2.display();
baseground.display();

}