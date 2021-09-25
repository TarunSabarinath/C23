class Ground{

    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.ground = Bodies.rectangle(x,y,w,h,options) ;
        this.width = w ;
        this.height = h;
        World.add(world,this.ground) ;

    }
    display(){
        var pos = this.ground.position ; 
        rectMode(CENTER) ;

        
        fill("red") ;

        rect(pos.x,pos.y,this.width,this.height) ;
    } 

}
