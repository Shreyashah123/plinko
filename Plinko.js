class Plinko{
    constructor(x,y,r){
        var options ={
            density:0.5,
            friction:0,
            isStatic:true,
            restitution:1.1,
        }
       this.x=x;
       this.y=y;

        this.body= Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.r=10;
        
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
