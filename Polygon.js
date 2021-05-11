class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            friction:1
        }
        this.r = r;
        this.Polygon = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.Polygon);
    }

    display(){
        var pos = this.Polygon.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image (this.image,-20,-20,this.r*1.35,this.r*1.35);
        pop();
    }
}