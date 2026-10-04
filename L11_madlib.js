let nounInput;
let button;
let storyText="";
let storyTemp;
let verbInput;
let adjInput;
let textInput4;
let textInput5;
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
        "The {adj} {noun} decided to {verb} {adv} down at {plc}"
        ,"Why did the {adj} {noun} {verb} {adv} at the {plc}?"
        ,"Look! The {adj} {noun} likes to {verb} {adv} at the {plc}!"
    ];
    storyText = random(storyTemp);
   
    storyText = storyText.replace("{noun}", nounInput.value())
    storyText = storyText.replace("{verb}", verbInput.value())
    storyText = storyText.replace("{adv}", advInput.value())
    storyText = storyText.replace("{adj}", adjInput.value())
    storyText = storyText.replace("{plc}", plcInput.value())


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
    fill("red");
    textAlign(CENTER,CENTER)
    text(storyText, width/2,height/2)
    
}
function updateText(){
    console.log("noun="+ nounInput.value());
    console.log("verb="+ verbInput.value());
    console.log("adj="+ adjInput.value());
    console.log("adv="+ advInput.value());
    console.log("plc="+ plcInput.value());
    
}
