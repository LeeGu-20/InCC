//background image
var backimage;



function preload() {
  backimage = loadImage("sky.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}



var mode = 'line';



function draw() {
  image(backimage, 0, 0, windowWidth, windowHeight);

  var x, y, r;
  var delta = 30;

  var starsPosition = map(mouseX, 0, windowWidth, 0, 1);
  var starsColor_Weight = map(mouseY, 0, windowHeight, 0, 100);

  switch (mode) {
    //falling stars
    case 'line':
       randomSeed(0);

      for (y = 0; y < windowHeight; y += delta) {
        for (x = 0; x < windowWidth; x += delta) {
          r = random(0, 1);
          if (r < starsPosition) {
            stroke(229, 255, 204);
            strokeWeight(starsColor_Weight);
            line(x, y, x + delta, y + delta);
          } else {
            stroke(255, 204, 229);
            strokeWeight(starsColor_Weight);
            line(x, y, x + delta, y + delta);
          }
        }
      }
      break;

      //moving planets
    case 'ellipse':
delta=30;
frameRate(8);
      for (y = 0; y < windowHeight; y += delta) {
        for (x = 0; x < windowWidth; x += delta) {
          r = random(0, 1);
          if (r < 0.5) {
            fill(255,255,102);
            ellipse(x, y, 10, 10);
          }
        }
      }
  }
}


//change mode
function keyPressed() {
  switch (key) {
    case 's':
      mode = "line";
      break;
    case 'p':
      mode = "ellipse";
      break;
    default:
      mode = "none"
      break;
  }
  print(mode);
}