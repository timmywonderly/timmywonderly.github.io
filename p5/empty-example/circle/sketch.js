var radius = 3;
var angle = 0.0;
var offset = 10;
var scalar = 2;
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
        fill(0, 0, 144, random(50));
        translate(mouseX, mouseY); {
            if (radius) = 400 {
            radius --; }
        }
    } else {
        radius --;
        fill(0, 138, 0, random(50);
        translate(mouseX + 30, mouseY - 25); {
            if (radius) = 400 {
                radius --; }
        }
    }
    ellipse(x, y, radius, radius); 
    angle += speed;}
    {
    
        
    }
    

