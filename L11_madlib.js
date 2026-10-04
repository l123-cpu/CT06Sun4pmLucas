let textinput;
let button;

function setup(){
    createCanvas(700,800)
    textInput=createInput();
    textInput.position(width/2,100);
    button=createButton("Click Here");
    button.position(width/2,135);
}

function draw(){
    background("silver")
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("enter name", width/2-15, 110);
    
}