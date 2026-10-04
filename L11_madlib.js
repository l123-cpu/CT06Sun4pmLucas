let textinput;
let button;
let storyText="";
let storyTemp;
let verbInput;
let adjInput;
let plcInput;
let advInput;
let nounInput;

function setup(){
    createCanvas(700,800)
    textInput=createInput();
    textInput.position(width/2,100);
    textInput2=createInput();
    textInput2.position(width/2,150);
    textInput3=createInput();
    textInput3.position(width/2,200);
    textInput4=createInput();
    textInput4.position(width/2,250);
    textInput5=createInput();
    textInput5.position(width/2,300);
    button=createButton("Click Here");
    button.position(width/2,400);
    button.mousePressed(updateText);
     storyTemp=[
        "The {adj} {noun} decided to {verb}{adv} down at{plc}"
    ];
    storyText = random(storyTemp);
   
    storyText = storyText.replace("{noun}", "dog");
    storyText = storyText.replace("{verb}", "jump")
    storyText = storyText.replace("{adv}", "exctiedly")
    storyText = storyText.replace("{adj}", "oh so joyful")
    storyText = storyText.replace("{plc}", "holocaust museum")

    nounInput=createInput
}

function draw(){
    background("silver")
    fill("black")
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a noun", width/2-10, 110);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a verb", width/2-10, 160);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter an adjective", width/2-10, 210);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter an adverb", width/2-10, 260);
    textSize(16);
    textAlign(RIGHT,CENTER);
    text("enter a place", width/2-10, 310);
    textSize(16);
    textAlign(RIGHT,CENTER);
    fill("red")
    textAlign(CENTER,CENTER)
    text(storyText, width/2-10,450)
}
function updateText(){
    console.log("noun="+ textInput.value())
    console.log("verb="+ textInput2.value())
    console.log("adj="+ textInput3.value())
    console.log("adv="+ textInput4.value())
    console.log("plc="+ textInput5.value())
}
