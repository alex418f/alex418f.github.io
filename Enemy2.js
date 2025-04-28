class Enemy2 extends EnemyBASE{
    constructor(wave,pos,a,speed,sPos){
      super(wave,pos,a,speed,sPos);
      this.life=2;
      this.chance=25; //chance for at skyde hvert 100ms
      this.vinkel =0;
      this.positionShip=sPos;
      this.mængde= Math.min(4*8,(Math.max(0,Math.floor((wave*0.0625*8)/a))*a));
      this.perRow=Math.min(8,Math.ceil(this.mængde/a));
      this.pos=(pos%(this.perRow+0.00001))*(width/(this.perRow+1))+this.forskydning;
      this.setpoint=Math.ceil((pos/this.perRow))*(this.dist*2);
      this.position=createVector(this.pos,this.setpoint+7.5);
      this.wspeed=speed*(-1)**(Math.ceil(this.perRow/a));
      this.velocity=createVector(-this.speed,0);
    }

    drawEnemy(){
      this.aCalc();
      noStroke();
      imageMode(CENTER);
      if (this.life==2){
      image(enm2,this.position.x, this.position.y);
      }
      else {
      image(enm22,this.position.x, this.position.y);
      }
   
     
    }
    aCalc(){
      var dx= this.position.x-this.positionShip.x;
      var dy = this.position.y-this.positionShip.y;
      this.vinkel = Math.atan2(dy, dx); //bruger invTan til at finde vinklen mellem skibet og fjenderne, 
    }
  }
  

