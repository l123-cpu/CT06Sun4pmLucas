let newInput="";
let button;
let thing;
let selected;
let hint;
function setup(){
    createCanvas(600,400)
    selected=random(word)
    hint = selected.charAt(0).toUpperCase();
    for(let i=1; i<selected.length;i++){hint=hint+"_";}
    newInput=createInput();
    newInput.position(width/2,100);
    button=createButton("Click Here");
    button.position(width/2,400);
    button.mousePressed(updateText);
    thing=["{x}"]
    thing=thing.replace("{x}", newInput.value())
}
function draw(){
    background(220)
}
function showWord(){
    typedword=imputfield.value(
        correctletter=getCorrectLetters(typedword,selected)
    )
}
function getCorrectLetters(guess,word)(){
    let correctletter=""
    newInput=newInput.toLowerCase()
    word= word.toLowerCase()
    for(let i=0; i<guesslenght;i++)
}