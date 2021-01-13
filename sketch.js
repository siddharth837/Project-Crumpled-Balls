
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;
var trash;
var render, groundObject;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new dustbin(697,610,20,120);
	box2=new dustbin(397,610,20,120);
  box3=new dustbin(543,660,290,20);
  groundObject=new ground(width/2,670,width,20);
  trash=new paper(200,450,70);

	Engine.run(engine);

	
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  stroke("white");
 text(mouseX+","+mouseY,mouseX,mouseY);
 fill("red");
 stroke("red")
 textSize(25);
 text("Press UP_ARROW key to drop this ball in the dustbin.",70,86);

 
  box1.display();
  box2.display();
  box3.display();
  trash.display();
  groundObject.display();

} 
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce( trash.body,trash.body.position,{x:89,y:-89});

  
  }
}

