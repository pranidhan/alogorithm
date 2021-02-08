

var fixedRect,movingRect;
var rect1,rect2;



function setup() {
createCanvas(800,800)



fixedRect=createSprite(400,400,100,40);
 fixedRect.shapeColor="green" 

movingRect=createSprite(600,400,40,150);
movingRect.shapeColor="green"

rect1=createSprite(100,600,40,40);
rect1.shapeColor="green"
rect1.velocityX=2;

rect2=createSprite(700,600,40,40);
rect2.shapeColor="purple"
rect2.velocityX=-2;


}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 // console.log(fixedRect.x-movingRect.x);

  if(fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2  &&
    movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
     fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2  &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2   ){

   
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red" ;
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green" ;
  }

  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2  &&
    rect2.x-rect1.x < rect1.width/2+rect2.width/2 ){
     
      rect1.velocityX = rect1.velocityX *(-1);
      rect2.velocityX =  rect2.velocityX *(-1);

    }

  

  drawSprites();
}