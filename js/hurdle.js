class Hurdle{
    constructor(x,y){
        this.body=createSprite(x,y,50,20);
        this.body.scale=0.5;
    }
    display(){
      this.body.addImage(hurdleImg);
     
    }
}