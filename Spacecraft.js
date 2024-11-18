let x = 0;
let y = 0;
let speed = 0.1;
let acceleration = 1;

createCanvas(600, 700);

function draw() {
background(0);
drawSpacecraft(x, y);

//x += speed;
y += speed;
speed += acceleration;

if (x > 500 || y > 200) {
    speed = 0;
}

}

function drawSpacecraft(x, y) {
    translate(x - 200, y);
    fill(37, 41, 38);
    push();
    noStroke();
    fill(252, 252, 28);
    quad(460, 305, 540, 305, 550, 350, 450, 350);
    fill(247, 247, 101);
    quad(450, 350, 550, 350, 560, 395, 440, 395);
    fill(252, 252, 189);
    quad(440, 395, 560, 395, 570, 440, 430, 440);
    pop();

    push();
    noStroke();
    fill(89, 230, 76);
    ellipse(500, 250, 250, 140);
    pop();
    
    beginShape();
    curveVertex(350, 230);
    curveVertex(350, 230);
    curveVertex(370, 270);
    curveVertex(520, 290);
    curveVertex(630, 270);
    curveVertex(650, 230);
    curveVertex(630, 230);
    curveVertex(350, 230);
    curveVertex(350, 230);
    endShape();
    
    ellipse(500, 230, 300, 100);

    
    push();
    fill(149, 211, 245);
    ellipse(500, 180, 150, 180);
    pop();

    push();
    noStroke();
    rect(420, 210, 160, 62);
    pop();

    push();
    strokeWeight(2);
    line(360, 245, 440, 212);
    line(500, 280, 500, 212);
    line(560, 212, 640, 245);
    pop();

    push();
    noStroke();
    fill(252, 252, 28);
    ellipse(390, 210, 30, 20);
    ellipse(450, 240, 40, 30);
    ellipse(550, 240, 40, 30);
    ellipse(610, 210, 30, 20);

    ellipse(360, 255, 7, 10);
    ellipse(390, 270, 7, 10);
    ellipse(425, 278, 7, 7);
    ellipse(460, 283, 7, 7);
    ellipse(500, 286, 7, 7);
    ellipse(540, 285, 7, 7);
    ellipse(575, 280, 7, 7);
    ellipse(610, 272, 7, 10);
    ellipse(635, 260, 7, 10);

    pop();
    drawBatman(260, 70);


}

function drawBatman(x, y) {
push();
translate(x, y);
scale(0.5);
theArm();
theHead();
theEars();
theEyes();
theMouth();
theBody();
theCape1();
pop();
}

function theHead() {
push();
noStroke();
fill(5, 48, 48);
rect(400, 100, 150, 100, 40);
rect(400, 150, 150, 100);

}

function theArm() {
fill(0);
triangle(380, 220, 350, 250, 380, 280);
}

function theEars() {
triangle(480, 130, 550, 40, 550, 150);
fill(1, 8, 8);
triangle(440, 100, 480, 40, 480, 100);
}

function theEyes() {
fill(255);
arc(430, 140, 20, 20, PI, 0);
arc(480, 140, 20, 20, PI, 0);
}

function theMouth() {
fill(250, 196, 160);
rect(400, 160, 100, 30);
arc(500, 190, 60, 60, -HALF_PI, 0);
pop();
push();
strokeWeight(5);
stroke(207, 153, 153);
line(410, 170, 490, 170);
pop();
}

function theBody() {
noStroke();
fill(0);
rect(380, 200, 130, 50);
fill(5, 48, 48);
rect(380, 220, 130, 60);
}
function theCape() {
noStroke();
fill(36, 145, 145);
rect(250, 210, 150, 60);
arc(250, 210, 130, 130, PI-HALF_PI, PI);
rect(340, 270, 220, 100);
arc(345, 270, 200, 200, PI-HALF_PI, PI);
}

function theLegs() {
fill(0);
rect(390, 350, 55, 60);
fill(5, 48, 48);
rect(485, 350, 55, 60);
}

function theBelt() {
fill(242, 218, 0);
rect(375, 290, 130, 30, 10);
fill(0);
ellipse(400, 305, 30, 30);
}

function theCape1() {
fill(36, 145, 145);
rect(470, 200, 120, 80);
rect(445, 200, 50, 20);
}