const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1=new Log(1070,390,20,120);
	log2=new Log(1020,390,80,20);
	log3=new Log(1120,390,80,20);
	ground = new Ground(600,height,1200,20);
    ball1= new Ball (100,300);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball1.display();

  //if(ball1.isTouching(log1)||ball1.isTouching(log2)||ball1.isTouching(log3)){
	//  ball1.isStatic=true
  //}

  drawSprites();
 }

 function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
 }
