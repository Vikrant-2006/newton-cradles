
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,335,40);
	bobObject2 = new Bob(250,335,40);
	bobObject3 = new Bob(300,335,40);
	bobObject4 = new Bob(350,335,40);
	bobObject5 = new Bob(400,335,40);
	
roof = new Roof(400,350,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



