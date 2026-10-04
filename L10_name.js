// //let r,g,b;
// //let ctimer=60;
// //let countdownID;





// //function setup(){
//     createCanvas(400,600);
//     textalign(CENTRE,CENTRE);
// }
// //function draw(){
//     background()
//     setInterval(countdown,1000);
//     textSize(24);
//     textAlign(CENTRE,CENTRE);
//     text(ctimer, width/2,height/2);
// }
// //function countdown(){
//     if ctimer>0{
//     ctimer--;
//     r=random(0,255);
//     g=random(0,255);
//     b=random(0,255);
//     )
//     }else{
//         clearInterval(countdownID);
//     }
    
// }//


// let userinput;
// let usertext= "ENTER TEXT HERE"

// function setup(){
//     createCanvas(600,400)
//     userinput=createInput();
//     userinput.position(width/2-90.height/-80)
//     useronput.input(updateText);
// }

// function draw(){
//     background(220);
//     textSize(24);
//     textAlign(CENTRE,CENTRE)
//     text(usertext,width/2,height/2);
//     textSize(12);
//     text("enter name", 50, height-70)
// }
// function updateText(){
//     usertext= this.value()
// }


// let userinput;
// let usertext= "ENTER TEXT HERE"

// function setup(){
//     createCanvas(600,400)
//     userinput=createInput();
//     userinput.position(width/2-90,height/-80)
//     useronput.input(updateText);
// }

// function draw(){
//     background(220);
//     textSize(24);
//     textAlign(CENTRE,CENTRE)
//     text(usertext,width/2,height/2);
//     textSize(12);
//     text("enter name", 50, height-70)
//     textSize(24);
//     textAlign(CENTRE,CENTRE)
//     text(usertext,width/2,height/2-20);
//     textSize(12);
//     text("enter age", 50, height-70)
// }

// function updateText(){
//     usertext= this.value()
// }
let userinput;
let bgcolourpicker;

function setup(){
createCanvas(400,400)
userinput=createInput();
userinput.position(width/2-90,height-80);
userinput.input(updateText);

bgcolourpicker=createColourPicker(220);
bgcolourpicker.position(width/2-90,height-120)

function draw(){
    background(bgcolourpicker.value());
    fill(255)
    Reflect(50,100,300,150,50)
    fill(0);
    textSize(12);
    text("pick colour",50,height-110)
    textSize(24);
    textAlign(CENTRE,CENTRE);

}
















        
heil hitler 