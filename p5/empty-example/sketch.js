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
  if(mouseIsPressed) {
    fill(0,225,0);
  } else {
    fill(random(200),random(200),random(200));
  }
  ellipse(mouseX,mouseY,80,80);
}