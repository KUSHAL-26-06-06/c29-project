
var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9;
var ground,polygon;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  box1=createSprite(330,235,30,40);
  box2=createSprite(360,235,30,40);
  box3=createSprite(390,235,30,40);
  box4=createSprite(420,23530,40,);
  box5=createSprite(450,235,30,40);
  box6=createSprite(360,195,30,40);
  box7=createSprite(390,195,30,40);
  box8=createSprite(420,195,30,40);
  box9=createSprite(390,145,30,40);

  polygon=Bodies.circle(50,200,50);
  World.add(world,polygon);
  slingshot =new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}