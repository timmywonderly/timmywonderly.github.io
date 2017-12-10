var radius = 12;
var angle = 0.0;
var offset = 60;
var scalar = 30;
var speed = 0.05;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 400);
  ellipseMode(RADIUS);
  centerCanvas();
  background(50, 200, 230);
}

function windowResized() {
  centerCanvas();
}

function draw() {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    var d = dist(mouseX, mouseY, x, y);
    if (d<radius) {
        radius ++;
        fill(0);
    } else {
        fill(255);
    }
    ellipse(x, y, radius, radius); }
    {
    
        
    }
    

