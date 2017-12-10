var radius = 3;
var angle = 0.25;
var offset = 10;
var scalar = 2;
var speed = 0.005;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 400);
  centerCanvas();
  background(0);
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
        fill(0, 0, random(255), scale(1, 50));
        translate(mouseX, mouseY);
    } else {
        radius --;
        fill(0, random(200), 0, 50);
        translate(mouseX, mouseY);
    }
    ellipse(x, y, radius, radius); 
    angle += speed;}
    {
    
        
    }
    

