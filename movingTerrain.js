let w = 1000;
let h = 1000;
let rows;
let cols;
let scl = 20;

let xNoiseMultiplier = 10;
let yNoiseMultiplier = 10;
let noiseRange = [-100, 100];

let xOffset = 0;
let yOffset = 0;

function setup() {
  createCanvas(
    (2 / 3) * document.body.offsetWidth,
    (2 / 3) * document.body.offsetHeight,
    WEBGL
  );
  h = 2 * height;
  w = 2 * width;
  rows = ceil(h / scl);
  cols = ceil(w / scl);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  translate(0, 0,-h/20);
  rotateX(PI / 3);
  rotateZ(PI/4)
  translate(-w / 2, -h / 2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(
        x * scl,
        y * scl,
        map(
          noise(
            ((x + xOffset) / cols) * xNoiseMultiplier,
            ((y + yOffset) / rows) * yNoiseMultiplier
          ),
          0,
          1,
          ...noiseRange
        )
      );
      vertex(
        x * scl,
        (y + 1) * scl,
        map(
          noise(
            ((x + xOffset) / cols) * xNoiseMultiplier,
            ((y + yOffset + 1) / rows) * yNoiseMultiplier
          ),
          0,
          1,
          ...noiseRange
        )
      );
    }
    endShape();
  }
    xOffset++;
    yOffset++;
}
