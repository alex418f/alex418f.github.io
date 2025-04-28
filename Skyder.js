class Skyder {
    constructor() {
      this.kugler = [];
    }
  
    updateKugler() {
      for (let i = 0; i < this.kugler.length; i++) {
        const k = this.kugler[i];
        k.update();
        if (k.life <= 0) {
          this.kugler.splice(i, 1);
          i--;
        }
      } 
    }
  
    drawKugler() {
      for (const k of this.kugler) {
        k.drawKugle();
      }
    }
    
    skydBullet(position, vinkel,type,fart,farve) {
      this.kugler.push(new Kugle(position, vinkel,type,fart,farve));
    }
    
  }