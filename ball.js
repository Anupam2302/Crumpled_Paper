class Ball {
    constructor(x, y) {
      var options = {
        //restitution:0.3,
        //friction:0.5,
        density:1.2,
        isStatic:false
      }
      this.body = Bodies.circle(x, y,20, options);
      this.width = 20;
      this.height = 20;
      this.radius=20;
      //this.velocityX=2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.velocityX=2;
      push();
      translate(pos.x, pos.y);
      
      fill("orange");
      ellipse( 0,0,this.width, this.height);
      pop();
    }
  };
  
 