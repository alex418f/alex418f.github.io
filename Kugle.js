class Kugle {
  constructor(pos,vink,type,fart,farve){
    this.position = createVector(pos.x, pos.y);
    this.velocity = createVector(0,0);
    this.kugleVinkel =vink;
    this.radius = 7;
    this.accel = -fart;
    this.life = 200;
    this.type = type;
    this.farve=farve;
  }
  update(){
    this.life--;
    this.velocity.x = cos(this.kugleVinkel);
    this.velocity.y = sin(this.kugleVinkel);
    this.velocity.x *= this.accel;
    this.velocity.y *= this.accel;
    this.position.add(this.velocity);
    if (this.type=="harmløs"){
    this.radius=2;
    }
    else{
      this.radius7;
    }
  }
  
  drawKugle(){
    const f =this.farve;
    fill(f.x,f.y,f.z);
    noStroke();
    circle(this.position.x, this.position.y, this.radius);
  }
}
