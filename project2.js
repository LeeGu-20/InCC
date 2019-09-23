var cx = [];
var cy = [];
var N,i;

function setup() {
  createCanvas(800, 600);
  frameRate(150);
  // setting background stars
  N=50;
  //determine the position randomly
  for (i=0; i<N; i++) {
    cx[i] = random(0,width);
    cy[i] = random(0,height);
    //setting their color and size randomly
    var sColor = random(0,255);
    fill(sColor, sColor, sColor);
    noStroke();
    var sSize = random(2,7);
    ellipse(cx[i],cy[i],sSize,sSize);
  }                 
}


//load the image of the application
function preload() {
  lg=loadImage("background2.png");}


function draw() {
  image(lg, 0,0, 800,600);
  changeColors();
}

function changeColors() {
  if (key=='y'||'Y') {
    rect(mouseX,mouseY,10,10);}
  elif (key=='p'||'P');{
    rect(mouseX,mouseY,15,15)}
  elif (key=='s'||'S');{
    rect(mouseX,mouseY,20,20);}
}
