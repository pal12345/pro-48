var attempt=5;
var score=0;
var gameState="play";

function setup() {
  createCanvas(1280, 400);
  ground1=createSprite(800,height,1600,40);
  box1=createSprite(700,380,50,50);
  box1.shapeColor="yellow";
  box2=createSprite(740,380,50,50);
  box2.shapeColor="yellow";
  box3=createSprite(780,380,50,50);
  box3.shapeColor="yellow";
  box4=createSprite(820,380,50,50);
  box4.shapeColor="yellow";
  box5=createSprite(860,380,50,50);
  box5.shapeColor="yellow";
  box6=createSprite(720,350,40,40);
  box6.shapeColor="pink";
  box7=createSprite(750,350,40,40);
  box7.shapeColor="pink";
  box8=createSprite(780,350,40,40);
  box8.shapeColor="pink";
  box9=createSprite(810,350,40,40);
  box9.shapeColor="pink";
  box10=createSprite(840,350,40,40);
  box10.shapeColor="pink";
  box11=createSprite(740,330,30,30);
  box11.shapeColor="green";
  box12=createSprite(760,330,30,30);
  box12.shapeColor="green";
  box13=createSprite(780,330,30,30);
  box13.shapeColor="green";
  box14=createSprite(800,330,30,30);
  box14.shapeColor="green";
  box15=createSprite(820,330,30,30);
  box15.shapeColor="green";
  box16=createSprite(780,310,30,30);
  box16.shapeColor="blue";
  log1=createSprite(500,300,60,PI/2);
  log1.shapeColor="red";
  log2=createSprite(500,250,60,PI/2);
  log2.shapeColor="red";
  log3=createSprite(500,200,60,PI/2);
  log3.shapeColor="red";
  log4=createSprite(500,150,60,PI/2);
  log4.shapeColor="red";

  log1.velocityY=-3;
  log2.velocityY=3;
  log3.velocityY=-3;
  log4.velocityY=3;


  ball=createSprite(50,200,50,50);
  ball.shapeColor="orange";
  bulletGroup=new Group();
 }
 
 function draw() {
   background("black");
  text("Attempt: "+attempt,50,50);
   drawSprites();
   edges=createEdgeSprites();
   log1.bounceOff(edges[2]);
   log1.bounceOff(ground1);
   log2.bounceOff(edges[2]);
   log2.bounceOff(ground1);
   log3.bounceOff(edges[2]);
   log3.bounceOff(ground1);
   log4.bounceOff(edges[2]);
   log4.bounceOff(ground1);


   if(keyDown("SPACE")&&gameState==="play"){
     bullets()
   }
   if(score===46){
    log1.visible=false;
    log2.visible=false;
    log3.visible=false;
    log4.visible=false;
    ball.visible=false;
    text("congrats,you won the game",200,200);
    gameState="over";
   }
   if(keyDown(UP_ARROW)){
     ball.y=ball.y-3;
   }
   if(keyDown(DOWN_ARROW)){
     ball.y=ball.y+3;
   }
    if(keyDown(RIGHT_ARROW)){
      ball.x=ball.x+3;
    }
   if(keyDown(LEFT_ARROW)){
     ball.x=ball.x-3;
   }
   if(ball.isTouching(log1)||ball.isTouching(log2)||ball.isTouching(log3)||ball.isTouching(log4)){
     ball.x=50;
     ball.y=200;
     //attempt=attempt-1;
   }
   if(bulletGroup.isTouching(log1)||bulletGroup.isTouching(log2)||bulletGroup.isTouching(log3)||bulletGroup.isTouching(log4)){
    bulletGroup.destroyEach();
    attempt=attempt-1;
  }
  if(attempt===0){
    end();
    gameState="end";
  }
  if(bulletGroup.isTouching(box1)){
    box1.destroy();
    score=score+4;
  }
  if(bulletGroup.isTouching(box2)){
    //box2.visible=false;
    box2.destroy();
    score=score+4;
  }
  if(bulletGroup.isTouching(box3)){
    //box3.visible=false;
    box3.destroy();
    score=score+4;
  }
  if(bulletGroup.isTouching(box4)){
    //box4.visible=false;
    box4.destroy();
    score=score+4;
  }
  if(bulletGroup.isTouching(box5)){
    //box5.visible=false;
    box5.destroy();
    score=score+4;
  }
  if(bulletGroup.isTouching(box6)){
    //box6.visible=false;
    box6.destroy();
    score=score+3;
  }
  if(bulletGroup.isTouching(box7)){
    //box7.visible=false;
    box7.destroy();
    score=score+3;
  }
  if(bulletGroup.isTouching(box8)){
    //box8.visible=false;
    box8.destroy();
    score=score+3;
  }
  if(bulletGroup.isTouching(box9)){
    //box9.visible=false;
    box9.destroy();
    score=score+3;
  }
  if(bulletGroup.isTouching(box10)){
    //box10.visible=false;
    box10.destroy();
    score=score+3;
  }
  if(bulletGroup.isTouching(box11)){
    //box11.visible=false;
    box11.destroy();
    score=score+2;
  }
  if(bulletGroup.isTouching(box12)){
    //box12.visible=false;
    box12.destroy();
    score=score+2;
  }
  if(bulletGroup.isTouching(box13)){
    //box13.visible=false;
    box13.destroy();
    score=score+2;
  }
  if(bulletGroup.isTouching(box14)){
    //box14.visible=false;
    box14.destroy();
    score=score+2;
  }
  if(bulletGroup.isTouching(box15)){
    //box15.visible=false;
    box15.destroy();
    score=score+2;
  }
  if(bulletGroup.isTouching(box16)){
    //box16.visible=false;
    box16.destroy();
    score=score+1;
  }
  text("score:"+score,200,50);
 }
 function bullets(){
   var bullet=createSprite(50,200,20,5);

   bullet.velocityX=6;
   bullet.y=ball.y;
   bullet.x=ball.x;
   bulletGroup.add(bullet);
  
 }
 function end(){
   text("game over",200,200);
   log1.visible=false;
   log2.visible=false;
   log3.visible=false;
   log4.visible=false;
   ball.visible=false;
   box1.visible=false;
   box2.visible=false;
   box3.visible=false;
   box4.visible=false;
   box5.visible=false;
   box6.visible=false;
   box7.visible=false;
   box8.visible=false;
   box9.visible=false;
   box10.visible=false;
   box11.visible=false;
   box12.visible=false;
   box13.visible=false;
   box14.visible=false;
   box15.visible=false;
   box16.visible=false;
 }