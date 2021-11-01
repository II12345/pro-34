var ball
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	
}

function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	


    wall1S=createSprite(980,550,300,30)
	wall1S.shapeColor="red"

	wall2S=createSprite(830,600,10,300)
	wall2S.shapeColor="red"

	wall3S=createSprite(1135,600,10,300)
	wall3S.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 wall1B=Bodies.rectangle(980,530,300,30,{isStatic:true})
     World.add(world,wall1B)
	 ball=Bodies.circle(100,580,30,{isStatic:false,
	restitution:0.3,

})
        World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 //rotate(ball.body.angle)
 translate(ball.body.position.x,ball.body.position.y)
  ellipseMode(RADIUS)
  ellipse(0,0,30,30)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}


