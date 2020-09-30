class Trashcan {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.width,this.height);
        this.body.shapeColor = color(255)
    }
}