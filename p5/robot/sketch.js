var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
    creatCanvas(720,480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {
    background(204);

    //neck
    stoke(102);  //stroke is gray
    line(266,257,266,162);  //left
    line(276,257,276,162); //mid
    line(286,257,286,162); //right

    //antennae
    line(276,155,246,112);  //small
    line(276,155,306,56);   //big
    line(276,155,324,170); //mid

    //body
    noStoke();
    fill(102);
    ellipse(264,337,33,33);
    fill(0);
    rect(219,257,90,120);
    fill(102);
    rect(219,274,90,6);

    //head
    fill(0);
    ellipse(276,155,45,45);
    fill(255);
    ellipse(288,150,14,14);
    fill(0);
    ellipse(288,150,3,3);
    fill(153);
    ellipse(263,148,5,5);
    ellipse(296,130,4,4);
    ellipse(305,162,3,3);
}