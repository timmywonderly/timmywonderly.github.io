var radius = 6;
var angle = 0.0;
var offset = 30;
var scalar = 15;
var speed = 0.05;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 400);
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
    if (mouseIsPressed) {
        radius ++;
        fill(0);
        translate(mouseX, mouseY);
    } else {
        fill(random(255,1,1,25));
    }
    ellipse(x, y, radius, radius); 
    angle += speed;}
    {
    
        
    }
    

