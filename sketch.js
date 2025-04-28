let spillet;
let c;
let count=1;
let reload;
let stjerner;
let stjern;
let enm1;
let skb;
let heart;
let enm22;
let frameCount=0;
let amount1=5;
let amount2=4; //Bestemmer mængde af enemmy2 der spawner ved hver wave.
let score=0;
let highScore=0;
let savedScore=JSON.parse(localStorage.getItem('playerScore'));
let taster={
  w:false,
  a:false,
  d:false,
  r: false,
  s: false,
  space:false
}

function preload(){
    stjerner=loadImage("Stjerner.jpg");
    enm1=loadImage("enm1.png");
    enm2=loadImage("enm2.png");
    skb=loadImage("skib.png");
    stjern=loadImage("Stjern.png");
    heart=loadImage("Heart.png");
    enm22=loadImage("Enm2.2.png");
  }

function setup() {
  c = createCanvas(windowWidth-900,windowHeight-120); 
  // sætter canvas og beholder reference c dertil
  let x = (windowWidth - width)/ 2;
  let y = (windowHeight - height)/ 2;
  c.position(x, y);  // rykker canvas ind på midten
  //select('body').style('background-color', '#000000');
  //reload = new Reload(); 
  this.spillet =new Spil();
  gameOverButton = createButton('Restart');
  gameOverButton.position(windowWidth/2-40, windowHeight/2);  
}

function draw() {
  gameOverButton.mousePressed(() => {
    this.spillet =new Spil();
    score=0;
    })
  if(score>highScore){
    highScore=score;
  }
  localStorage.setItem('playerScore', JSON.stringify(highScore));
  if (savedScore>highScore){
    highScore=savedScore;
  } 
  console.log(JSON.parse(localStorage.getItem('playerScore')))
  const display = document.getElementById('score');
      display.textContent = `SCORE: ${score}`;
  
  const display2 = document.getElementById('highScore');
      display2.textContent = `HIGH-SCORE:${highScore}`;
  
        
  //image(stjern,0,windowHeight/2,windowWidth,windowHeight);
  fill(0 ,0,0,100);
  strokeWeight(16);
  stroke(120,0,0);
  
 // image(stjern,width/2,height/2,windowWidth*1.5,windowHeight);
  rect(0 ,0 , width, height);
 // image(stjerner,width/2,(height)/2,width-10,height-10);
  // hvilken metode skal også kaldes her?
  
  this.spillet.update();
   this.spillet.drawSpil();
 // console.log(windowWidth);
  //console.log(windowHeight);
}


function keyPressed(){
    if(key=='r'){
    taster.r=true;
  }
    if(key=='s'){
    taster.s=true;
  }
    if(key=='w'){
    taster.w=true;
  }
    if(key=='a'){
    taster.a=true;
  }
    if(key=='d'){
    taster.d=true;
  }
    if(key==' '){
      taster.space=true;
    }
  }

function keyReleased(){
    if(key=='s'){
    taster.s=false;
  }
    if(key=='r'){
    taster.r=false;
  }
    if(key=='w'){
    taster.w=false;
  }
    if(key==='a'){
    taster.a=false;
  }
    if(key==='d'){
    taster.d=false;
  }
    if(key===' '){
    taster.space=false;
  }
}
function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(width, height);
  let x = (windowWidth - width)/ 2;
  let y = (windowHeight - height)/ 2;
  c.position(x, y);  // rykker canvas ind på midten
}