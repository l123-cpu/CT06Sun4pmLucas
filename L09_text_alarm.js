let countdown=5;
let x=200;
let r=0;
let g=0;
let b=0;

let interval;
function preload(){
    soundEffect=loadSound('assets/bossaNova.mp3');
}

function setup(){
    createCanvas(600,400);
    textalign(CENTRE,CENTRE);
}
function draw(){
    background(220);
    textSize=32;
}