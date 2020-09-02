
/* 
functions to show
all functions must return either
a number or an object with an
attribute value that is a number
and an attribute color with a 
valid color to pass to stroke
 */
let funcs = [];
funcs.push((x, t) => {
  k = 1;
  w = 1;

  return 100 * cos(k * x) * cos(w * t);
});

//examples
funcs.push((x, t) => {
  return { value: 10 * sin(x * 2 + t * 2), color: [(t*100)%256, 0, 0] };
});

function setup() {
  createCanvas(
    (document.body.offsetWidth * 2) / 3,
    (document.body.offsetHeight * 2) / 3
  );
  background(220);
}

function draw() {
  //clear all
  background(220);
  //translate to center
  translate(0, height / 2);

  //current time
  let t = millis();

  //ratios by which x and t are multiplied
  let xratio = 1 / 20;
  let tratio = 1 / 1000;

  //auxiliar function, this normalizes the output of the function
  let callFunction = (f, x, t) => {
    let aux = f(x * xratio, t * tratio);
    if (typeof aux == "number") {
      aux = { value: aux * -1, color: [0, 0, 0] };
    } else {
      aux.value = aux.value * -1;
    }
    return aux;
  };
  //previous iteration variable
  let prevX = 0;
  let prevY = funcs.map((f) => callFunction(f, prevX, t));

  //iterate
  for (let x = 1; x < width; x++) {
    //get y
    let aux = funcs.map((f) => callFunction(f, x, t));
    //draw lines
    aux.forEach((y, i) => {
      noFill();
      stroke(y.color);
      line(prevX, prevY[i].value, x, y.value);
    });
    //store prev values
    prevX = x;
    prevY = aux;
  }
}
