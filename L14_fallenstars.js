let starX=[];
let starY=[];
let starSize=[];
let numStars=10;

function setup(){
    createCanvas(600,400);
    for (let i=0; i < numStars; i++){
        starX.push(random(width));
        starSize.push(random(-300,-50));
        starSize.push(random(10,20));
        starSpeed.push(random(1,3));
    
    }
}
function draw(){
    background(0);
     for (let i=0; i < numStars; i++){
        fill(255,255,0);
        ellipse(starX[i],starY[i], starSize[i]);
        staryY[i]+= starSpeed[i];
        if (starY>height){
            starY[i]=random()
        }
     }
}