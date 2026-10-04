let textinput;
let button;

function setup(){
    createCanvas(700,800)
    textInput=createInput();
    textInput.position(width/2,100);
    button=createButton("Click Here");
    button.position(width/2,600);
    button.mousePressed(updateText);
}

function draw(){
    background("silver")
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a noun", width/2-10, 110);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a noun", width/2-10, 150);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a noun", width/2-10, 2000);
}
function updateText(){
    console.log("Hello,"+ textInput.value())
}