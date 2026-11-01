let starX=[];
let starY=[];
let starSize=[];
let numStars=10;
let playerX;
function setup(){
    createCanvas(600,400);
    for (let i=0; i < numStars; i++){
        starX.push(random(width));
        starSize.push(random(-300,-50));
        starSize.push(random(10,20));
        starSpeed.push(random(1,3));
        playerX=width/2;
    }
}
function draw(){
    background(0);
     for (let i=0; i < numStars; i++){
        fill(255,255,0);
        ellipse(starX[i],starY[i], starSize[i]);
        staryY[i]+= starSpeed[i];
        if (starY>height){
            starY[i]=random(-200,-50);
            starY[i]=random(width);
            starSpeed[i=random](2,5);
        if (keyIsDown(LEFT_ARROW)){
            playerX-=5;
        }
        if (keyIsDown(RIGHT_ARROW)){
            playerX+=5;
        }
        playerX+=constrain(playerX,onabort,width-40)
        }
     }
}