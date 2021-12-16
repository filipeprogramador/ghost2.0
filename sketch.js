var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function criaPortas (){
if (frameCount % 250 === 0){
  door = createSprite (300,-50,50,50)
  door.x = Math.round(random(100,500))
  door.velocityY=1
  door.addImage('porta',doorImg)
  
  climber = createSprite (300,0,50,50)
  climber.velocityY=1
  climber.x = door.x
  climber.addImage('climber',climberImg)
  climber.lifetime = 700
  door.lifetime = 700
  invisibleBlock=createSprite(300,0,50,1)
  invisibleBlock.velocityY=1
  invisibleBlock.x = door.x
  invisibleBlock.lifetime = 700

}
  
}
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,300,50,50)
  ghost.addImage('ghost',ghostImg)
  ghost.scale=0.3
}

function draw() {
  background(200);

  criaPortas ()
  
  if(tower.y > 400){
      tower.y = 300
    }
if (keyDown("left_arrow")){
  ghost.x=ghost.x-3
}

if (keyDown("right_arrow")){
  ghost.x=ghost.x+3
}

drawSprites ()



}
