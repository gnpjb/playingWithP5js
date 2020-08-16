let fr = 1;

let grid;
let prevGrid;
const rows = 10;
const cols = 10;
let w;
let h;

function setup() {
  createCanvas(
    (document.body.offsetWidth * 2) / 3,
    (document.body.offsetHeight * 2) / 3
  );
  frameRate(fr);

  w = width / cols;
  h = height / rows;

  grid = [];
  prevGrid = [];
  for (let x = 0; x < cols; x++) {
    grid[x] = [];
    prevGrid[x] = [];
    for (let y = 0; y < rows; y++) {
      grid[x][y] = random([0, 1]);
      prevGrid[x][y] = grid[x][y];
    }
  }
}

function draw() {
  background(220);
  noStroke();
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      fill(grid[x][y] * 255);
      rect(x * w, y * h, w, h);
      let sum = 0;
      for (const ix of [-1, 0, 1]) {
        for (const iy of [-1, 0, 1]) {
          if (
            ix + iy != 0 &&
            ix + x >= 0 &&
            ix + x < cols &&
            iy + y >= 0 &&
            iy + y < rows
          ) {
            sum += prevGrid[x + ix][y + iy];
          }
        }
      }
      grid[x][y] = sum % 2;
    }
  }
  for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
          prevGrid[x][y] = grid[x][y];
      }
  }
}
