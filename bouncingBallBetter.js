let b;

function setup() {
  createCanvas(
    (2 / 3) * document.body.offsetWidth,
    (2 / 3) * document.body.offsetHeight
  );
  background(0);
  b = [new Ball(createVector(width / 2, height/2),createVector(150,0))]
}

let toggle = false;
function draw() {
  background(0,100);
  noStroke();
  fill(255,0,0);
  b.forEach(v=>v.update());
  b.forEach(v=>v.show());
  b = b.filter(v=>{
      return abs(v.vel.x)>5||abs(v.vel.y)>5
  })
  if(mouseIsPressed){
    toggle = true;
  }else{
    toggle = false;
  }
  
  if(toggle){
      b.push(new Ball(createVector(mouseX,mouseY),createVector(150,0)))
      toggle = false;
  }
}

const dt = 0.1;
const g = 10;
class Ball {
  vel = createVector(0, 0);
  pos;
  size = 10;
  constructor(pos,vel) {
    this.pos = pos;
    if(typeof vel != 'undefined'){
        this.vel = vel;
    }
  }

  update() {
    if (this.pos.y + this.size / 2 < height) {
      this.vel.y += g * dt;
    }
    if (
      this.pos.x - this.size / 2 + this.vel.x * dt < 0 ||
      this.pos.x + this.size / 2 + this.vel.x * dt > width
    ) {
      this.vel.x *= -2 / 3;
    }
    if (this.pos.y + this.size >= height) {
      this.vel.x += Math.sign(this.vel.x) * -1 * 2 * dt;
    }
    if (
      this.pos.y - this.size / 2 + this.vel.y * dt < 0 ||
      this.pos.y + this.size / 2 + this.vel.y * dt > height
    ) {
      this.vel.y *= -2 / 3;
    }
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }

  show() {
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
