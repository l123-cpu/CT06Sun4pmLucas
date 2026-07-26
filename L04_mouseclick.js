// write your codes here
let sc= "blue";
function setup(){
    createCanvas(600,400);
    background(220);

}
function draw(){
   fill(sc)
   circle (300,200,200)
   
   rect(10,20,20,20)}
function mousePressed(){
    sc=colour(random(255), random(255), random(255))
}
