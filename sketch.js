const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options1 = {
    restitution: 0.5,
    
  }
  ball = Bodies.circle (200, 50, 40, options1)
  World.add(world, ball)
  
  ball1 = Bodies.circle (300, 70, 20, options1)
  World.add(world, ball1)

  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var options = {
    pointA: { x: 200,  y: 20},
    pointB: { x: 0,  y: 0},
    bodyB: ball,
    length: 100,
    stiffness: 0.1
  }
  con = Matter.Constraint.create(options)
  World.add(world,con)
  
  var options2 = {
    bodyA: ball,
    pointA: { x: 0,  y: 0},
    pointB: { x: 0,  y: 0},
    bodyB: ball1,
    length: 100,
    stiffness: 0.1
  }
  con2 = Matter.Constraint.create(options2)
  World.add(world, con2)


  
}

function draw() 
{
  background(51);
  
  ellipse(ball.position.x, ball.position.y, 10)
  ellipse(ball1.position.x, ball1.position.y, 20)

  push()
  strokeWeight(5)
  stroke("white")
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y)
  line(ball.position.x, ball.position.y, ball1.position.x, ball1.position.y)
  pop()
  Engine.update(engine);
}

function keyPressed () {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball1, {x:0,y:0}, {x:0.1, y:0})
  }
}

