class EnemyBASE extends Skyder{
    constructor(wave,pos,a,speed,sPos){
        super();
        this.wave=wave;
        this.numb=wave*5;
        this.sPos=sPos;
       // this.pos=(pos%5.0001)*(width/6);
        this.pos1=pos;
        this.height=50;
        this.accelx=0;
        this.accely=0;
        this.dist=50;
        this.a=a;
        this.amount=10;
        //this.floor=Math.floor(this.pos/5.000001+2);
        this.speed=speed;
        //this.setpoint=Math.ceil((this.pos1/5))*this.dist;
        this.condright =true;
        this.condleft =true;
        this.radius=20;
        this.sWindow =false; //øjeblikket fjenderne har til at skyde
        this.sFrek=50; //ændrer frekvensen af skud
       // this.position=createVector(this.pos,this.setpoint+7.5);
        //centrer efter variabel for højde, baseret på wave
        this.skudfart = Math.min(6,this.wave*0.1+4);
        this.forskydning = Math.random()*30-15;
        this.skudfarve=createVector(0, 255, 0)
        }

        update(){
            

            //this.velocity.y =this.wspeed;
            this.velocity.x += this.accelx;
           this.position.add(this.velocity);
            
            //this.life--;
            if(this.position.x>width-20&&this.velocity.x>(-this.speed)){
            this.velocity.x -= 0.1;
            }
            if(this.position.x<20&&this.velocity.x<this.speed){
                this.velocity.x += 0.1;
                }
            
              
                
            
             //this.life--;
             if(this.position.y>this.setpoint-1&&this.velocity.y>-1){
             this.velocity.y -= 0.05;
            }
            if(this.position.y<this.setpoint+1&&this.velocity.y<1){
             this.velocity.y += 0.05;
            }
            if(this.position.x>width-20&&this.condright){
            this.setpoint+=this.dist;
            this.condright=false;
            this.condleft=true;
            }
            if(this.position.x<20&&this.condleft){
                this.setpoint+=this.dist;
                this.condleft=false;
                this.condright=true;
                }
          }
         skud(){
            if(frameCount%this.sFrek==this.sFrek-1){
                this.sWindow=true;
        }
            else{
                this.sWindow=false;
            }
        if (this.sWindow==true){
            var numb=Math.floor(Math.random()*100)
                if (numb<=this.chance){
                 this.skydBullet(this.position,this.vinkel,"fjende",this.skudfart,this.skudfarve);
              }
            }
         
         }
       
        }

        
        
  