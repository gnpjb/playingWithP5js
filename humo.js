let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  particles.push(new MyParticle(300, 300, 10,100));
  particles = particles.filter((p) => {
    return p.life > 0;
  });
  particles.forEach((p) => {
    p.show();
    p.update();
  })
}


class MyParticle {
  x;
  y;
  w;

  maxLife = 100;
  life = this.maxLife;

  rminx = -1;
  rmaxx = 1;
  rminy = -3;
  rmaxy = -1;

  constructor(x, y, w, maxLife) {
    this.x = x;
    this.y = y;
    this.w = w;

    if (typeof maxLife == 'number') {
      this.maxLife = maxLife;
      this.life = maxLife;
    }
  }

  show() {
    fill(0, 0, 0, 255 * (this.life / this.maxLife));
    stroke(0, 0, 0, 255 * (this.life / this.maxLife));
    ellipse(this.x, this.y, this.w);
  }
  update() {
    this.x += random(this.rminx, this.rmaxx);
    this.y += random(this.rminy, this.rmaxy);
    this.life = (this.life - 1) < 0 ? this.life : this.life - 1;
  }
}