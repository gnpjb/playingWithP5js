let dt = 0.01;
let t = 0;
let A = 100;
let q0 = 0;
let w = 4;

let f = () => {
  return A * cos(w * t + q0);
};


let ASlider;
let q0Slider;
let wSlider;

function setup() {
  createCanvas(400, 400);
  ASlider = createSlider(20, 100, A);
  wSlider = createSlider(1, 10, w);
}

let widthOfCircle = 10;
let points = [];
let dy = 1;

function draw() {
  A = ASlider.value();
  w = wSlider.value();
  background(220);
  translate(width / 2, height / 2);



  t += dt;
  points.push([f(), 0]);


  points = points.filter((p) => {
    return Math.abs(p[1]) < Math.abs(height / 2);
  });

  stroke(255, 0, 0)
  noFill();
  beginShape()
  points.map((p) => {
    p[1] -= dy;
    vertex(p[0], p[1]);
    return p;
  });
  endShape();


  stroke(0);
  fill(255);
  line(-A - widthOfCircle, 0, f(), 0);
  line(-A - widthOfCircle, -width / 2, -A - widthOfCircle, width / 2)
  ellipse(f(), 0, widthOfCircle);
}