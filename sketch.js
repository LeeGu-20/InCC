//background image
function preload() {
  backimage = loadImage("sky.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(backimage,0,0,windowWidth, windowHeight);
}

function draw() {
  
  randomSeed(0);
  
  var x,y,r;
  var delta = 30;
  
  var starsPosition = map(mouseX, 0, windowWidth, 0,1);
  var starsColor_Weight = map(mouseY, 0, windowHeight,0,100);
  
  
  switch(mode) {
  //falling stars
  case 'line' : 
      
  for (y=0; y<windowHeight; y+=delta) {
    for(x=0; x<windowWidth; x+=delta) {
      r=random(0,1);
      if (r<starsPosition) {
        storke(255,90,starsColor_Weight);
        strokeWeight(starsColor_Weight);
       line(x,y,x+delta,y+delta);
      }else {
        stroke(starsColor_Weight,255,90);
        storkeWeight(starsColor_Weight);
        line(x,y,x+delta,y+delta);}}}
  break;
  
  //moving planets
  case 'ellipse' : 
  
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      r=random(0,1);
      if (r<0.5) {
        fill(0,0,r);
        ellipse(x,y,delta,delta);
    break;}}}}}


//change mode
function keyPressed() {
  switch(key) {
    case 's' : mode = "line";
    break;
    case 'p' : mode = "ellipse";
    break;
    default : mode= "none"
    break;
  }
  print(mode);
}







