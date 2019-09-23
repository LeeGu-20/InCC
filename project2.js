//load the image of the application
function preload() {
  background=loadImage("background2.png")}

var cx = [];
var cy = [];
var N,i;

function setup() {
  createCanvas(800,600);
  frameRate(150);
}


function draw() {
  image(background, 0,0, windowWidth,windowHeight);
  createBackstars();
  if (mouseIsPressed) {
    var c = color(0,255,255);
    fill(c);
    ellipse(mouseX,mouseY,15,15);}
}


function createBackstars() {
  // setting background stars
  N=80;
  //determine the position randomly
  for (i=0; i<N; i++) {
    cx[i] = random(0,width);
    cy[i] = random(0,height);
    
    //setting their color and size randomly
    var sColor = random(0,255);
    fill(255, 255, sColor);
    noStroke();
    var sSize = random(2,7);
    ellipse(cx[i],cy[i],sSize,sSize);}   
}