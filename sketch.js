const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var box1, box2, box3;

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paperBall = new Paper(50, 220);
    box1 = new Trashcan(600, 650, 200, 20);
    box2 = new Trashcan(490,620,20,100);
    box3 = new Trashcan(710,620,20,100);
    
    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(0,0,255);
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
     World.add(world, ground);
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  paperBall.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}
function keyPressed() {
    if(keyCode == 38) {
        Matter.Body.applyForce(paperBall.body, paperBall.body,{x: 65, y:-65});
    }
}
