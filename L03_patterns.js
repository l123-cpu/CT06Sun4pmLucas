function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  //circle(75,200,100,100);
  //circle(225,200,100,100);
  //circle(375,200,100,100);
  //circle(525,200,100,100)
  // Task 1: Colour Gradient
    //for(let i=0; i<5; i++){
     //fill(i*50);
     //circle(50+i*50,200,40);
   // }
  // Task 2: Colour Loop
  let s=50 
  fill(colourvalue)
   circle(100,100,100)
   for let colourvalue=0; colourvalue<5;i++){
    if(colourvalue%2==0){
      fill(0);

    }else{
      fill(255)}
      circle(s+colourvalue*s,200,40)
  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}