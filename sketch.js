var fixedRect, movingRect;
var bound1, bound2, bound3, bound4;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -5;
 // fixedRect.velocityY = 1;

  movingRect= createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "blue ";
  movingRect.velocityX = 5;
}

function draw() {
  background(0,0,0);  

 // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  //rectMode(CENTER);
  //rect(400,200,50,50);

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
      movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2   
    ){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if (fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }   
   console.log(fixedRect.x);
  boundary();
  drawSprites();
  
}

function boundary(){
  bound1 = createSprite(400, 0, 800, 5);
  bound2 = createSprite(795, 200, 5, 400);
  bound3 = createSprite(400, 395, 800, 5);
  bound4 = createSprite(0, 200, 5, 400);
}