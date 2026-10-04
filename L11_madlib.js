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
    text(usertext,width/2,height/2);
    textSize(12);
    text("enter name", 50, height-70)
    textSize(24);
    background("silver")
}