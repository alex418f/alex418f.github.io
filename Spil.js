class Spil extends Skyder{
    constructor() {
      super();
       this.skibet = new Skib(); // skibet laves her
       this.stjernePos=createVector(0,0)
       this.stjernefreq=this.skibet.wave*0.1+1;
       this.stjernefreq2=Math.max(10,this.stjernefreq)
       this.farve=createVector(255,255,255);
       
      
      
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
       gameOverButton.hide();  
      } else {
        gameOverButton.show();  
        textSize(70);
        text("Game over", width/2-170, height/2-100);
      }
  }
}