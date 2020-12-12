var thickness;
var wall,bullet;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223.321);
  weight = random(30,52);
  thickness = random(22,38);
  
  bullet= createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  wall= createSprite(1300, 200, thickness,height/2); 
  wall.shapeColor =(80,80,80);
  
}
function hasCollided(bullet,wall){
  
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x ;
  
  if(bulletRightEdge >= wallLeftEdge){
    return true;
 }
    return false;
 }

 if(hasCollided(bullet,wall)){
  bullet.velocityX =0;

 if(damage>10){
 wall.shapeColour = (225,0,0);
  return false;
}

if(damage<10){
 wall.shapeColor = (0,255,0);

 }
}
  

  
  function draw() {
  background(0); 
  hasCollided();
  
  
  drawSprites();
}