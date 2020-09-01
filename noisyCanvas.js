let inverse = 100;
let direction = -1;
function setup() {
    createCanvas(document.body.offsetWidth * 2/3,document.body.offsetHeight*2/3);
}

function draw() {
    if(inverse>1 && inverse<=100){
        inverse+=direction;
    }else{
        direction=direction>0?-1:1;
        inverse+=direction;
    }
    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            set(x,y,noise(x/inverse,y/inverse)*255);
        }
    }
    updatePixels();
    
}