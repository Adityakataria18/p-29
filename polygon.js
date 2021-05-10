class Polygen{
    constructor(x,y,radius){

    }

    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        imageMode(CENTER)
         image(polygon_img,polygon.position.x,polygon.position.y,40,40)
        ;
      }

      }
    