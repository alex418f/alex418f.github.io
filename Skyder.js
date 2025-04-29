let bullets=[];
class Skyder {
    constructor() {
    }
  
    updateKugler() {
      for (let i = 0; i < bullets.length; i++) {
        const k = bullets[i];
        k.update();
        if (k.life <= 0) {
          bullets.splice(i, 1);
          i--;
        }
      } 
    }
  
    drawKugler() {
      for (const k of bullets) {
        k.drawKugle();
      }
    }
    
    skydBullet(position, vinkel,type,fart,farve) {
      bullets.push(new Kugle(position, vinkel,type,fart,farve));
    }
    
  }