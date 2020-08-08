const dt = .1;

const g = 10;


let p = [];
function setup() {
  createCanvas(2/3*document.body.offsetWidth, 2/3*document.body.offsetHeight);
  background(200);
  
}

function draw() {
  background(0);
  if(random(0,10)>8){
    let newP = new Particle(
        createVector(random(0,width), height),
        createVector(0, random(-50,-95)),
        createVector(0, g)
    );
    newP.fillColor = [random(30,240),random(30,240),random(30,240)];
    p.push(newP);
  }
  p.forEach(v=>v.update());
  noStroke();
  p.forEach(v=>{
      fill(...v.fillColor);
      v.show()
    });
  p = p.filter((v)=>{
    return !v.shouldDie();
  })
}

class Particle {
  pos;
  vel;
  acc;
  w = createVector(10, 10);
  lifespan = 50;
  constructor(pos, vel, acc,lifespan) {
    if(typeof lifespan == 'number'){
        this.lifespan = lifespan;
    }

    this.pos = pos;
    if (typeof vel == "undefined") {
      this.vel = createVector(0, 0, 0);
    } else {
      this.vel = vel;
    }
    if (typeof acc == "undefined") {
      this.acc = createVector(0, 0, 0);
    } else {
      this.acc = acc;
    }
  }
  update() {
    this.vel = p5.Vector.mult(this.acc, dt).add(this.vel);
    this.pos = p5.Vector.mult(this.vel, dt).add(this.pos);
    this.lifespan -= dt;
  }
  show() {
    if (this.lifespan > 0) {
      ellipse(this.pos.x, this.pos.y, this.w.x, this.w.y);
    }
  }
  shouldDie(){
      return this.lifespan < 0;
  }
}
