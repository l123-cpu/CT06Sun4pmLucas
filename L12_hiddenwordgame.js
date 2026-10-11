let newInput;
let button;
let thing;
function setup(){
    createCanvas(600,400)
    newInput=createInput();
    newInput.position(width/2,100);
    button=createButton("Click Here");
    button.position(width/2,400);
    button.mousePressed(updateText);
    thing=["{x}"]
    thing=thing.replace("{x}", newInput.value())
}