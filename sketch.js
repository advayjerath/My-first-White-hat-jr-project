
var path,boy,coins,drink,power,bomb;
var pathImg,boyImg,coinImg,drinkImg,powerImg,bombImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  coinImg = loadImage("coin.png");
  drinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


//creating boy running
boy = createSprite(180,340,60,30);
boy.addAnimation("JakeRunning",boyImg);

for(i=50;i<360;i=i+50){
coins = createSprite(i, 40, 10, 10);
coins.addImage(coinImg);
coins.scale=0.3;
}

// for(i=100;i<350;i=i+50){
// drink = createSprite(i, 80, 10, 10);
// drink.addImage(drinkImg);
// drink.scale=0.09;
// }

// for(i=130;i<300;i=i+50){
// power = createSprite(i, 120, 10, 10);
// power.addImage(powerImg);
// power.scale=0.09;
// }

// for(i=150;i<290;i=i+50){
// bomb = createSprite(i, 160, 10, 10);
// bomb.addImage(bombImg);
// bomb.scale=0.08;
// }

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
