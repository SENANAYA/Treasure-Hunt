var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var grt = 600
  var NOI =0
//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(windowWidth/2,windowHeight/2);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.5

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=windowWidth/792*0.1;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height){
    path.y = height/2;
  }
  grt=600
    NOI=0
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
    NOI =Math.round(windowWidth*3/792)
    console.log(windowWidth)
    while(treasureCollection>grt){
      if(grt<(NOI)*600){
            createSword();
      }
      grt=grt+600
          }
    
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=windowWidth/2;
        boy.y=windowHeight/2;
        boy.scale=windowWidth*0.6/792;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(30);
  fill(0);
  text("Treasure: "+ treasureCollection,windowWidth/2-70,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, windowWidth-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=windowWidth*0.15/792;
  cash.velocityY = 3;
  cash.lifetime = windowWidth/3;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount %  320 == 0) {
  var diamonds = createSprite(Math.round(random(50,windowWidth-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
 diamonds.scale=windowWidth/792*0.05;
    
  diamonds.velocityY = 3;
  diamonds.lifetime = windowWidth/3;
  diamondsG.add(diamonds);
    console.log(diamonds.width+"jewellery"+diamonds.height)
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, windowWidth-50),40,10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=windowWidth/792*0.18;
  jwellery.velocityY = 3;
  jwellery.lifetime = windowWidth/3;
  jwelleryG.add(jwellery);
    
  }
}

function createSword(){
  if (World.frameCount % 530/2  == 0) {
  var sword = createSprite(Math.round(random(50, windowWidth-50),40, 10, 10));
  sword.addImage(swordImg);
    if(grt===600&&NOI===0){
  
        sword.scale=windowWidth*0.18/792;
    }else      if(grt===600&&NOI>0){
  
        sword.scale=windowWidth*0.15/792;
    }else    if(grt===1200&&NOI>0){
    
  sword.scale=windowWidth*0.13/792;
    }else{
      sword.scale=windowWidth*0.13/792
    }
    
      
  sword.velocityY = 3;
  sword.lifetime = windowWidth/3;
  swordGroup.add(sword);
    
  }
}