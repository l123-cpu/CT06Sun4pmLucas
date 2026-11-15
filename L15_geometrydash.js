// let circleX=(200,200,200);
// let circleY=(50,150,250);
// let circleSpeed=[];
// let CircleColour=[];
// let numCircle=3;
// let circlesize=50;

// function setup(){
//     createCanvas(400,300);
//     circleColour=[color(255,0,0),color(0,255,0,), color(0,0,255)];
//     for (let i=0, i<numCircle; i++){
//         circleSpeed.push(random(1,3));
//     }
// }
// function draw(){
//     circle(75,75)
//     circleX= 
// }
let playerX=100;
let playerY;
let playerSize=30
let velocity=0;
let isGrounded=false;

function setup(){
    createCanvas(400,600)
    textAlign(CENTER,CENTER)
    background(0)
}
function draw(){
    velocity+=0,8
    playerY+=velocity;

    if (playerY>=height-playerSize){
        playerY=height-playerSize;
        isGrounded=true;
        velocity=0;
    } else{
        isGrounded=false
    }
    fill(0,255,0)
    Reflect(player)
}
