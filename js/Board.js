class Board
{
    constructor(x, y, width, height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;

        var boardOptions=
        {
          isStatic: true
        }

        this.image = loadImage("assets/board.png");
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, boardOptions);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}