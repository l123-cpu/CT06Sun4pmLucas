const { startTransition } = require("react");

let x=200;
let r=100;
let g=100;
let b=100;
let speed=3;
let favfood=["A","B"]
function setup(){
    createCanvas(600,400)
}

function draw(){
    background(220);
    fill(r,g,b);
    rect(x,200,40)
    x+=speed
    textsize(32)
text("lucas", 0, 200)
text("14", 50 ,100)

loadSound('assets/star_wars_theme_8_bit.mp3')
text(favfood) 
}

