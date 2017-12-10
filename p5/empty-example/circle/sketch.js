var x = 120;
var y = 60;
var radius = 12;
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
    background(204);
    var d = dist(mouseX, mouseY, x, y);
    if (d<radius) {
        radius ++;
        fill(0);
    } else {
        fill(255);
    }
    ellipse(x, y, radius, radius); }
    {
        if (mouseIsPressed){
            fill(random(200,5,5,10));
            ellipse(mouseX, mouseY, x, y, 25);
        }
    }

