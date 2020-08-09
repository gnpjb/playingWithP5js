let range = [50, 100];

function setup() {
  createCanvas(
    (2 / 3) * document.body.offsetWidth,
    (2 / 3) * document.body.offsetHeight,
    WEBGL
  );
  let aux = width > height ? height / 3 : width / 3;
  range[1] = range[1] > aux ? aux : range[1];
}

const ammtOfPoints = 100;

function draw() {
  background(3, 252, 244);
  fill(232,176,21)
  noStroke()
  beginShape();
  for (let i = 0; i < ammtOfPoints; i++) {
    let angle = (i / ammtOfPoints) * 2 * PI;
    let r = map(noise(cos(angle), sin(angle), angle), 0, 1, ...range);
    vertex(cos(angle) * r, sin(angle) * r);
  }
  endShape(CLOSE);
}
