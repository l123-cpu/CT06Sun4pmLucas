// write your codes here
let soundEffect, bgMusic,staticImage;
function preload(){
    soundEffect=loadSound('assets/pop.mp3');
    bgMusic=loadSound('assets/bossaNova.mp3');
    staticimage=loadImage('assets/pico-a.png');

}
function setup(){
    createCanvas(400,400);
    bgMusic.loop()
}
function setup(){
    background("lightblue");
    image(staticImage,0, 0, 50, 50);
    
}
function KeyPressed(){
    if(keycode === 32);{
        soundEffect.play()
    }
}
function draw(){
    background()
}