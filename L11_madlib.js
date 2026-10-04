let textinput;
let button;

function setup(){
    createCanvas(700,800)
    textInput=createInput();
    textInput.position(width/2,100);
    button=createButton("Click Here(for nothing)");
    button.position(width/2,135);
    button.mousePressed(updateText);
}

function draw(){
    background("silver")
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter something(nothing will happen)", width/2-10, 110);
    
}
function updateText(){
    console.log("Hello,"+ textInput.value())
}