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
    fill(random(200));
    ellipse(mouseX,mouseY,40,80);
    fill(random(200),random(200),random(200));
    triangle(mouseX,mouseY,mouseX - 50,mouseY - 40,mouseX + 45,mouseY - 50)
  } else {
    fill(random(200),random(200),random(200));
    ellipse(mouseX,mouseY,80,40);
    fill(random(200));
    triangle(mouseX,mouseY,mouseX - 50,mouseY - 40,mouseX + 45,mouseY - 50)
    
  }
  
  
}