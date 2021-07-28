
function setup() {
  createCanvas(400,400);
  
 
 
}

function draw() 
{
  background(100);
  if(keyIsDown(RIGHT_ARROW)) {
  background("blue");
}
 
  if(keyIsDown(LEFT_ARROW)){
  background("red");
}
if(keyIsDown(UP_ARROW)){
  background("green");
}
if(keyIsDown(DOWN_ARROW)){
  background("yellow");
}
}


