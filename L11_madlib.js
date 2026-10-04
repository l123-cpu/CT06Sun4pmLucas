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
    background(220);
    textSize(24);
    textAlign(CENTRE,CENTRE)
    text("enter name")
    background("silver")
}