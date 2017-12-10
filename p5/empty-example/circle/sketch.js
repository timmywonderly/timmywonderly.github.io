var radius = 3;
var angle = 0.25;
var offset = 30;
var scalar = 3;
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
        fill(255);
        translate(mouseX, mouseY);
    } else {
        radius--;
        fill(0,random(200),0,50);
        translate(mouseX, mouseY);
    }
    ellipse(x, y, radius, radius); 
    angle += speed;}
    {
    
        
    }
    

