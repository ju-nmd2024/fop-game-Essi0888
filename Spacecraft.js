let x = 0;
let y = 0;
let s = 0.5; //Scale
let speedY = 4;
let accelerationY = 0.1;
let particles = [];
let explosionTriggered = false;
let landedSafely = false;
let gameWon = false;
let explosionX = 0;
let explosionY = 0;
let gameState = 'START';

createCanvas(600, 700);

function draw() {
    background(0);
    if (gameState === 'START') {
        drawStartScreen();
    } else if (gameState === 'PLAY') {
        drawGamePlay();
    } else if ( gameState === 'WIN') {
        gameWin(width, height);
    } else if ( gameState === 'GAMEOVER') {
        gameOver(width, height);
    }

    
}
function drawGamePlay(){
    drawSpaceAtm(width, height);

    if (mouseIsPressed && y > 300 && y < 400){
        drawLights(x, y);
    }

    if (!landedSafely && !gameWon) {
        if (y <= 550) {
            drawSpacecraft(x, y);
            y = y + speedY; //Gravity and speed
            speedY = speedY + accelerationY;

            //Balance speed when mouse or space key is pressed
            if (mouseIsPressed || keyIsDown(32)) {
                speedY = speedY - 0.7;
            }
        } else {
            if (speedY > 5 && !explosionTriggered) {
                explosionY = y;
                createExplosion();
                explosionTriggered = true;
            }   else if (!explosionTriggered) {
                landedSafely = true;
                gameWon = true;
                gameState = 'PLAY';
            }
        }
    }
    
    if (explosionTriggered) {
        explosion();
        
    } else if (landedSafely) {
        drawSpacecraft(x, 550);
    }
}

function createExplosion() {
    for (let i = 0; i < 200; i++){
        particles.push({
            x: 300,
            y: explosionY,
            velocityX: random(-15, 15),
            velocityY: random(-10, 10),
            lifespan: 255
        });
    }
}

function explosion() {
    for (let i = particles.length - 1; i >= 0; i--){
        let particle = particles[i];
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.lifespan -= 5;
        noStroke();
        fill(255, 99, 3, particle.lifespan);
        rect(particle.x, particle.y, 15);
        ellipse(particle.x, particle.y, 15);

        if (particle.lifespan <= 0) {
            particles.splice(i, 1);
        }
    }

    if (particles.length === 0){
        gameState = 'GAMEOVER';
    }
}

function drawStartScreen() {
    background(0);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(50);
    text('Land Batman safely on the moon!', width / 2, height / 2);
    textSize(30);
    text('Press any key to start', width / 2, height / 2);
}

function gameWin() {
    background('rgba(0, 0, 255, 0.3)');
    textFont('monospace');
    textAlign(CENTER, CENTER);
    fill(0, 0, 255);
    textSize(80);
    text('YOU WON!', width / 3, height / 2 - 100);
    textSize(30);
    text('Press any key to restart', width / 3, height / 2);
    noLoop();
}

function gameOver() {
    background('rgba(150, 0, 0, 0.3)');
    textFont('monospace');
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textSize(80);
    text('GAME OVER', width / 3, height / 2 - 100);
    textSize(30);
    text('Press any key to restart', width / 3, height / 2);
    noLoop();
}

function resetGame() {
    x = 0;
    y = 0;
    speedY = 4;
    accelerationY = 0.1;
    particles = [];
    explosionTriggered = false;
    landedSafely = false;
    gameWon = false;
    loop();
}

//Drawing the space atmosphere
function drawSpaceAtm(width, height){
    starfield();
    push();
    stroke(68, 76, 87);
    fill(81, 94, 110);
    strokeWeight(10);
    beginShape();
    vertex(0, 500);
    vertex(200, 470);
    vertex(300, 480);
    vertex(400, 470);
    vertex(430, 490);
    vertex(440, 470);
    vertex(480, 460);
    vertex(500, 500);
    vertex(590, 470);
    vertex(width, 500);
    endShape(CLOSE);
    pop();
    push();
    noStroke();
    fill(81, 94, 110);
    rect(0, 495, width, height);
    pop();
    push();
    strokeWeight(10);
    stroke(68, 76, 87);
    fill(43, 48, 54);
    ellipse(200, 600, 200, 60); 
    ellipse(350, 500, 100, 20);
    ellipse(90, 500, 70, 20);
    ellipse(590, 550, 300, 90);
    ellipse(420, 690, 70, 20);
    pop();
}

//Drawing the starfield
function starfield(){
    push();
    let x1 = random(width);
    let y1 = random(height);
    let sizeStar = random(1, 5);
    let brightness = random(150, 255);
    stroke(brightness);
    strokeWeight(sizeStar);
    point(x1, y1);
    pop();
}

//Drawing the spacecraft with Batman inside
function drawSpacecraft() {
    translate(x - 200, y - 200);
    fill(37, 41, 38);

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

//Drawing the lights under the spacecraft
function drawLights(x, y){
    push();
    translate(x - 200, y - 200);
    noStroke();
    fill(252, 252, 28);
    quad(460, 305, 540, 305, 550, 350, 450, 350);
    fill(247, 247, 101);
    quad(450, 350, 550, 350, 560, 395, 440, 395);
    fill(252, 252, 189);
    quad(440, 395, 560, 395, 570, 440, 430, 440);
    pop();
}

function drawBatman(x, y) {
push();
translate(x, y);
scale(s);
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

function theCape1() {
fill(36, 145, 145);
rect(470, 200, 120, 80);
rect(445, 200, 50, 20);
}