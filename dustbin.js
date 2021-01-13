class dustbin{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.wall=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
        World.add(world,this.wall);
    }
     display(){
         var posWall=this.wall.position;
         push()
         stroke("green");
         fill("green");
         rectMode(CENTER);
         rect(this.x,this.y,this.width,this.height);
         pop()

     }
}