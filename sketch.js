var allBalls = [];
var Ball;
var d1;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (x = 0; x < windowWidth; x += 40) {
    for (y = 0; y < windowHeight; y += 40) {

      var tempx = x;
      var tempy = y;
      var tempr = 30;

      var tempBall = new Ball(tempx, tempy, tempr);

      allBalls.push(tempBall);
    }
  }
}

function draw() {

  for (var i = 0; i < allBalls.length; i++) {

    var tempBall = allBalls[i];

    tempBall.hover();
    tempBall.clicked();
    tempBall.display();
  }
}

function mouseClicked() {
  for (var i = 0; i < allBalls.lenght; i++) {
    allBalls[i].clicked();
  }
}

function Ball(_x, _y, _diam) {
  this.x = _x;
  this.y = _y;
  this.size = _diam;
  this.color = fill(50);
  this.yellow = false;

  this.hover = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d > this.size / 2) {
      this.color = fill(50);
    } else {
      this.color = fill(100);
    }
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2 && mouseIsPressed) {
      this.yellow = true;
      d1 = d;
    }
    if (this.yellow == true && d < this.size / 2) {
      this.color = fill('red');
    }
  }

  this.display = function() {
    if (this.yellow == true) {
      this.color = fill('red');
    }
    ellipse(this.x, this.y, this.size);
  }
}
