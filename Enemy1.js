class Enemy1 extends EnemyBASE{
  constructor(wave,pos,a,speed){
    super(wave,pos,a,speed);
    this.life=1;
    this.chance=50;
    this.vinkel=1.5*PI;
    this.mængde=Math.min(4*8,Math.floor((wave*0.125*8)/a))*a; 
    this.perRow=Math.min(8,Math.ceil(this.mængde/a)); //hold øje med denne ikke tikker op hurtigere end mængde
    this.pos=(pos%(this.perRow+0.0001))*(width/(this.perRow+1))+this.forskydning;
    this.setpoint=Math.ceil((pos/this.perRow))*(this.dist*2)-this.dist;
    this.position=createVector(this.pos,this.setpoint+7.5);
    this.wspeed=speed*(-1)**(Math.ceil(this.perRow/a));
    this.velocity=createVector(this.speed,0);
  }
  drawEnemy(){
    noStroke();
    imageMode(CENTER);
    image(enm1,this.position.x, this.position.y);

   
  }
}

