class Paper{
    constructor(x,y,){
        var ballOptions = {
           isStatic: false,
           restitution: 0.3, 
           friction: 0.5,
           density: 1.2
        }
    this.body = Bodies.circle(x,y,20,ballOptions);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("pink");
        ellipse(pos.x,pos.y,20,20);
    }
}