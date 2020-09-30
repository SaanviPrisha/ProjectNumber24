class Paper{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.body = Bodies.circle(x, y, 20, options);

        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS)
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0, 20, 20);
        pop();
    }
}