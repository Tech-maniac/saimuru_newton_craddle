const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var rope1;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);



	ball1 = Bodies.circle(300,200,80);
	World.add(world,ball1);


	rope1 = Constraint.create({
		bodyA : ball1,
		pointB : {x:300,y:100},
		length:100,
		stiffness : 0.05
	})

	World.add(world,rope1);






	Engine.run(engine);
	
  
}

function draw() 
{
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);


  ellipse(ball1.position.x,ball1.position.y,40,40);
  
  push();
  strokeWeight(3)
  
  line(rope1.pointB.x,rope1.pointB.y,ball1.position.x,ball1.position.y);
  pop();

  //call display() to show ropes here


  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
