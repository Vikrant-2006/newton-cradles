class Bob{
    constructor(x,y,radius){
    var options={
    isStatic:true,
    //restitution:0.3,
    //friction:0.5,
    //density:1.2
    
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius= 40;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill("purple");
     ellipseMode(CENTER)
     ellipse(pos.x,pos.y,this.radius,this.radius);
      }
    }