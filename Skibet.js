class Skib extends Skyder{
    constructor() {
      super();
      this.radius = 20;
      this.vinkelSkib = 29.84;
      this.friktion = 0.97;
      this.friktiony = 0.96;
      this.position = createVector(width/2, height-20);
      this.velocity = createVector(0, 0);
      this.accelx = 0;
      this.accely =0;
      this.speed = 5;
      this.life = 4;
      this.skudFart = 15; 
      this.enemy1 =[];
      this.wave=0;
      this.numb=0;
      this.numb2=0;
      this.hearts =[];
      this.cup=1;
      this.cdown=this.life;
      this.grace=0;
      this.skudfart=10;
      this.speedE=0.5;
      this.scoreTexts = [];
      this.Skade = false;
      this.skudFarve=createVector(255,0,0); //benytter vector for at slippe afsted med at push en værdi
    }

    update() {
      if (this.grace>0){
        this.grace--;
      }
      
      if (this.skudFart < 16) {
        this.skudFart++;
      }

      this.kollision();
  
      
      for (const e1 of this.enemy1) {
        e1.update();
        e1.skud();
      }
      if (this.accely<6||this.accely>-6) {
        this.accely -= (this.position.y/(height-100)-1)*3;
      } 

      if (this.accely > 0.01||this.accely < -0.01) {
        this.accely *= this.friktiony;
        this.position.y += this.accely;
      }

      

      if (this.accelx > 0.3||this.accelx < -0.3) {
        this.accelx *= this.friktion;
        
       
        this.position.x += this.accelx;
      }
      
    }
    drawSkib() {
    frameCount++; //for at koden kun kører når skibet er i live
    if(frameCount>10000){  //for at framecounten ikke bliver uendeligt høj og gør spil langsommere
      frameCount=0;
    }
      for (let i=0; i<this.hearts.length; i++){
        for (let x of this.hearts){
         
            image(heart,x*30,height-30,25,25);
          
          
        }
        if(this.life===this.cdown-1){
          this.hearts.splice(-1,1);
        } //fjerner 1 liv hvis liv er 1 under hvad liv var før
      this.cdown=this.life; //sætter nye liv og gamle liv lig hinanden
     
      }
     
      if(this.cup<=this.life){
          this.hearts.push(this.cup);
          this.cup+=1;
        } //gør det samme som i overnævnte
       
        //indsæt dette et sted, for funktion til at få liv
        /*this.life+=1;
       this.cup=this.hearts.length+1;*/
      

      this.drawKugler();
      this.updateKugler();
    
      for (let i = 0; i< this.enemy1.length; i++) {
        const e1 = this.enemy1[i];
        if(e1.life>0){
          e1.drawEnemy();
        }
        else{
          this.enemy1.splice(i,1);
          i--;
        }
      }
      
     
     for (let i = 0; i < this.scoreTexts.length; i++) {
      const sT = this.scoreTexts[i];
      fill(50);
      stroke(255, 50, 50);
      strokeWeight(4);
      textSize(25);
      text(sT.text, sT.x, sT.y);
      sT.timer--;

      if (sT.timer <= 0) {
        this.scoreTexts.splice(i, 1);
        i--; 
      }
    }
      

    if (this.enemy1.length===0){
      this.wave+=1;
      
      this.rows=Math.min(4,1+Math.floor(this.wave*0.125));
      this.numb=Math.min(4*8,Math.floor((this.wave*0.125*8)/this.rows)*this.rows); //for at undgå at spawne for mange
      
      this.rows2=Math.min(4,1+Math.floor(this.wave*0.0625));
      this.numb2=Math.min(4*8,(Math.max(0,Math.floor((this.wave*0.0625*8)/this.rows2))*this.rows2)); //for ikke at spawne nogen fra starten af
     }

     if (this.numb>0) { 
      this.enemy1.push(new Enemy1(this.wave,this.numb,this.rows,this.speedE));
      this.numb-=1;
       }
    if (this.numb2>0) { 
        this.enemy1.push(new Enemy2(this.wave,this.numb2,this.rows2,this.speedE,this.position));
        this.numb2-=1;
         }

     if (frameCount % 20<10&&this.grace>0){
    }
    else{
      image(skb,this.position.x,this.position.y);
     } //tegner skibet, samt blinker det hvis graceperioden er aktiv, og hvis frametælleren er under 10, hver gang den tikker op med 20./halvdelen af tiden
     
     if(this.position.x<10){
      this.accelx=0;
    }
    if(this.position.x>width-10){
      this.accelx=0;
    }
    const display3 = document.getElementById('wave');
      display3.textContent = `WAVE:${this.wave}`;
    }
    
    styrSkib() {
      
    
  if(this.position.y>height-this.radius){
    this.accely=0;
  }
  if(this.position.x<this.radius){
    this.accelx=0;
  }
  if(this.position.x>width-this.radius){
    this.accelx=0;
  }
  if(taster.w){
    if (this.accely > -5) {
      this.accely -= 1; 
  }
}
  if(taster.s&&this.accely <5&&this.position.y<height-this.radius){
     
    this.accely += 1;
}
  if(taster.d&&this.accelx < 5&&this.position.x<width-this.radius){
    
      this.accelx += 0.8 ;
  
  }
if(taster.a&&this.accelx > -5&&this.position.x>this.radius){

  this.accelx -= 0.8 ;
}

    
if (this.skudFart > 14&&taster.space) {
    this.skydBullet(this.position, 0.5*PI,"spiller",this.skudfart,this.skudFarve);
       this.skudFart -= 15
       }
 }
    
    kollision(){
      for (let i = 0; i< this.enemy1.length; i++) {
       const e1 = this.enemy1[i];
        const dix=e1.position.x-this.position.x;
        const dyx=e1.position.y-this.position.y;
        const afst = sqrt(dix*dix+dyx*dyx);
      if (this.enemy1.length>0) {
        if (afst < e1.radius + this.radius&&this.grace==0){
          e1.life--;
          this.Skade=true;
          
        }
        
        
        for (let j = 0; j < bullets.length; j++) {
          const k = bullets[j];
          const dx = this.position.x - k.position.x;
          const dy = this.position.y - k.position.y;
          const distance = sqrt(dx * dx + dy * dy);
          if (distance < this.radius + k.radius && this.grace == 0 && k.type == "fjende") {
            bullets.splice(j, 1); 
            j--; 
            this.Skade=true;
          }
        }
       if (this.Skade==true) {
          this.life-=1;
          this.grace=200; //grace periode efter at have taget skade
         this.Skade=false;
        }
       
        for (let j = 0; j< bullets.length; j++) {
          const k = bullets[j];
          const dx = e1.position.x - k.position.x;
          const dy = e1.position.y - k.position.y;
          const distance = sqrt(dx**2 + dy**2); //trigenometrisk afstand mellem de to
          
          
          if (distance < e1.radius + k.radius&&k.type=="spiller") {
            bullets.splice(j, 1); // fjerner element i array'et
            j--;
            e1.life--;
           if (e1 instanceof Enemy1){
            score+=250;
            this.scoreTexts.push({
              text: "+250",
              x: e1.position.x,
              y: e1.position.y,
              timer: 25
           })
           }
           if (e1 instanceof Enemy2){
            score+=500;
            this.scoreTexts.push({
              text: "+500",
              x: e1.position.x,
              y: e1.position.y,
              timer: 25
           })
           }

  
        
               
            } 
           
          }
        }
      }
    }
    
}  