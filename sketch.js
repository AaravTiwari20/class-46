var blimp,blimpimage,sky,skyimage,birds,bird1,bird2,bird3,bird4,bird5,bird6,bird7,bird8,coins,coinimage,birdGroup,coinGroup;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var score = 0;
function preload(){
blimpimage = loadImage("Blimp.png");
skyimage = loadImage("sky.png");
birds = loadImage("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png");
coinimage = loadImage("coin.png");
}
function setup() {
  createCanvas(displayWidth-70,displayHeight-50);

  sky = createSprite(0,0,displayWidth-70,displayHeight-50);
  sky.addImage(skyimage);
  sky.scale=2.5;
  sky.velocityX=-4;

  blimp = createSprite(100,300);
  blimp.addImage(blimpimage);
  blimp.scale=1.5;
  
  birdGroup = new Group();
  coinGroup = new Group();
}

function draw() {
  background(0);
  if(gameState===PLAY){
  if(sky.x<0){
  sky.x=sky.width/2;
  }

  if(keyDown("space")){
  blimp.velocityY=-10;
  }

  blimp.velocityY = blimp.velocityY+0.5
  
  if(coinGroup.isTouching(blimp)){
  coinGroup.destroyEach();
  score = score+1;
  }
  }
  spawnBirds();
  spawnCoins();

 

  drawSprites();
 
}
function spawnBirds(){
  if (frameCount%100===0){
  bird=createSprite(800,200,20,20);
  bird.addAnimation("flying",birds);
  bird.y=Math.round(random(50,250));
  bird.velocityX=-4;
  bird.scale=0.1;
  birdGroup.add(bird);
  }
  }
  function spawnCoins(){
    if (frameCount%100===0){
    coin=createSprite(800,200,20,20);
    coin.y=Math.round(random(50,250));
    coin.addImage(coins);
    coin.velocityX=-4;
    coin.scale=0.1;
    coinGroup.add(coin);
  }
  }