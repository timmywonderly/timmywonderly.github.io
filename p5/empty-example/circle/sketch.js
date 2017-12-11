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
  cnv = createCanvas(windowWidth , windowHeight - 200);
  centerCanvas();
  background(255);
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
        fill(148, 148, 184, random(50));
        translate(mouseX, mouseY); 
    } else {
        radius --;
        fill(255 ,102, 255, random(50));
        translate(mouseX + 30, mouseY - 25); 
    }
    ellipse(x, y, radius, radius); 
    angle += speed;}
    {
    
        
    }
    

