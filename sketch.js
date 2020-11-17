
var basket1,basket2,basket3;
var ball,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	basket1 = new Basket(580,687,200,20);
	basket2 = new Basket(480,660,20,100);
	basket3 = new Basket(690,660,20,100);

	ground1 = new Ground(400,height,800,20);

	ball = new Paper(100,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
  ball.display();
  ground1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-4	})
	}
}

