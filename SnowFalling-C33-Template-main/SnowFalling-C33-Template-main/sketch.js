var snowimg, man , manimg

function preload(){
  snowimg=loadImage("download.jpg")
  manimg=loadImage("barbie.png")
}


function setup() {
  createCanvas(800,400);
  man=createSprite(400, 300, 50, 50);
  man.addImage(manimg)
  man.scale=0.1
  
}

function draw() {
  background(snowimg); 
  if (keyDown(LEFT_ARROW)){
    man.x=man.x-5
  }
  if (keyDown(RIGHT_ARROW)){
    man.x=man.x+5
  }
  
  drawSprites();
}