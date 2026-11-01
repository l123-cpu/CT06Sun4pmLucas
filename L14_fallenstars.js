let starX=[];
let starY=[];
let starSize=[];
let numStars=10;

function setup(){
    createCanvas(600,400);
    for (let i=0; i < numStars; i++){
        starX.push(random(width));
        starSize.push(random(-300,-50));
        
    }
}