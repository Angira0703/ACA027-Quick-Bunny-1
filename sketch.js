var bunny;
var carrot;
var edges;

function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  
  bunny = createSprite(40, 550, 20, 20);
  carrot = createSprite(550, 50, 30, 30);
  carrot.shapeColor = "#106e6b";
  bunny.shapeColor = "#e879ba";
  obs1 = createSprite(250, 300, 80, 25);
  obs2 = createSprite(250, 220, 80, 25);
  obs1.shapeColor = "#ed2626";
  obs2.shapeColor = "#ed2626";
  obs3 = createSprite(250, 100, 80, 25);
  obs4 = createSprite(250, 350, 80, 25);
  obs3.shapeColor = "#ed2626";
  obs4.shapeColor = "#ed2626";
  obs1.velocityX = 5;
  obs2.velocityX = -5;
  obs3.velocityX = 3;
  obs4.velocityX = -6;
 
}

function draw() {
  background("#004f1a"); 
  if(keyDown("up")){
    bunny.y=bunny.y-4;
  } 
  if(keyDown("down")){
    bunny.y=bunny.y+4;
  } 
  if(keyDown("right")){
    bunny.x=bunny.x+4;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-4;
  }
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  if (bunny.isTouching(obs1)){
    bunny.X = 0;
    bunny.Y = 0;
    bunny.x = 40;
    bunny.y = 550;
    carrot.shapeColor = "lightBlue";

    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
  }

  if (bunny.isTouching(obs2)){
    bunny.velocityX = 0;
    bunny.velocityY = 0;
    bunny.x = 40;
    bunny.y = 550;
    carrot.shapeColor = "lightBlue";
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
  }

  if (bunny.isTouching(obs3)){
    bunny.velocityX = 0;
    bunny.velocityY = 0;
    bunny.x = 40;
    bunny.y = 550;
    carrot.shapeColor = "lightBlue";
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
  }

  if (bunny.isTouching(obs4)){
    bunny.velocityX = 0;
    bunny.velocityY = 0;
    bunny.x = 40;
    bunny.y = 550;
    carrot.shapeColor = "lightBlue";
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
  }

  if (bunny.isTouching(carrot)){
    text("YOU WIN!",250,300);
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
  }
  drawSprites();
  
}
