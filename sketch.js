var canvas;
var block1,block2,block3,block4;
var ball, edges;

function setup(){
    canvas = createCanvas(850,600);
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "yellow";
    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(425,100,40,40);
    ball.shapeColor = rgb(255,255,255);
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))    {
        ball.shapeColor = "yellow"
    }

   if(block4.isTouching(ball) && ball.bounceOff(block4)) {
       ball.shapeColor = "green";
   }

   if (keyDown(UP_ARROW)) {
    ball.velocityX =0;
    ball.velocityY =-4;
}

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}

  if (keyDown(LEFT_ARROW)) {
  ball.velocityX =-4;
  ball.velocityY =0;
}

  if (keyDown(RIGHT_ARROW)) {
  ball.velocityX =4;
  ball.velocityY =0;
}
    drawSprites();
}