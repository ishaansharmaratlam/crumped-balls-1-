
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;
function setup() {
	createCanvas(500,700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,660,30);
	ground = new Ground (400,680,1000,10);
	dustbin1 = new Dustbin (300,620,20,80);
	dustbin2 = new Dustbin (390,665,200,20)
	dustbin3 = new Dustbin (480,620,20,80);

	Engine.run(engine); 
}
function draw() {  
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
	
  drawSprites();
}
function keyPressed(){
   if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-105})
   }
}