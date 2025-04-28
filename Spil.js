class Spil extends Skyder{
    constructor() {
      super();
       this.skibet = new Skib(); // Create the ship here
       this.stjernePos=createVector(0,0)
       this.stjernefreq=this.skibet.wave*0.1+1;
       this.stjernefreq2=Math.max(10,this.stjernefreq)
       this.farve=createVector(255,255,255);
       //this.wave=1;
       
       //this.enemy1= new Enemy1();
      
      
      }
  
  
    update() {
      
      if (keyIsPressed) {
        this.skibet.styrSkib();
      }
      this.stjernePos.x=Math.random()*width;
      this.skibet.update();
      if (frameCount%this.stjernefreq2>this.stjernefreq2-2){
      this.skydBullet(this.stjernePos,1.5*PI,"harmløs",this.stjernefreq+3,this.farve);
      }
      
    }
  
    drawSpil() {
      if (this.skibet.life > 0){
        this.skibet.drawSkib();
       // this.enemy1.drawEnemy1();
       //this.enemy.skud();
       gameOverButton.hide();  
      } else {
        gameOverButton.show();  
      }
}

//function mousePressed() {
  //if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {

}