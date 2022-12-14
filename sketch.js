var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisibleGround = createSprite(200,190,400,20);
invisibleGround.visible=false;

}

function draw() {
background(255,255,255);

//jump when the space button is pressed
if (keyDown("space")) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}


trex.collide(invisibleGround);


spawnObstacles();
spawnClouds();
drawSprites();
}
function spawnClouds(){
  if(frameCount%120===0){
  cloud=createSprite(580,50);
  cloud.y=Math.round(random(30,80));
  cloud.addImage(cloudImage)
  cloud.velocityX=-1.5;
  cloud.scale=0.1;
}
}

function spawnObstacles(){
  if(frameCount%60===0){
    obstacle=createSprite(560,150,20,50);
    obstacle.velocityX=-6;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1 :obstacle.addImage(obstacle1);
            break;
      case 2 :obstacle.addImage(obstacle2);
            break;
      case 3 :obstacle.addImage(obstacle3);
            break;
      case 4 :obstacle.addImage(obstacle4);
            break;
      case 5 :obstacle.addImage(obstacle5);
            break;
      case 6 :obstacle.addImage(obstacle6);
            break;

            default:break;
    }
    obstacle.scale=0.1;
  }
}

//how do we make the obstacles collide with the invisible ground?
