
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);  
  monkey.scale = 0.1;
 
  
  ground = createSprite(400,350,900,10);  
  ground.x = ground.width /2;
  ground.velocityX=-4
 
  bananas=createSprite(200,200,20,20);
   bananas.addImage(bananaImage);
  bananas.scale=0.1;
   
  
  obstacle=createSprite(200,330,30,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1
  
  
  
  
  
obstaicleGroup= createGroup();
 FoodGroup= createGroup();
  
  
  
}


function draw() {
background("red")
  
  

  
  
   if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   stroke=("white");
  textSize=(20);
  fill=("white");
  text=("score:"+score,500,50);
  
   stroke=("black");
  textSize=(20);
  fill=("black");
  survivalTime=Math.ceil(frameCount/frameRate());
   text=("survival Time:"+survivalTime,100,50); 

  
 
  
 drawSprites(); 
}

function spawnObstacles(){
 
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
   banana = createSprite(200,200,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = 2;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

