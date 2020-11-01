var wall, thickness;
var bullet, speed, weight;
var damage

function setup() {
  createCanvas(1600,400);
  
  speed = random(233,321);
  weight = random(30,52);

  thickness= random(22, 83);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = (225);
  
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {  
 
  background(255,255,255);  
  
  if(hascollided(bullet, wall))
    {
      bullet.velocityX = 0;
      damage= 0.5 * weight * speed * speed/thickness * thickness * thickness;
      
      if(damage < 10)
      {
        bullet.shapeColor = color(0,255,0)
      }
      
      if(damage > 10)
      {
        bullet.shapeColor = color(230,230,0)
      }

    }

  
  
  drawSprites();
}

function hascollided(Lbullet, Lwall){

  var bulletRightEdge = Lbullet.x + Lbullet.width;
  var wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}