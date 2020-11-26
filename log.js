class Log {
  constructor(x, y, height,width) {
    var options = {
      // 'restitution':0.1,
      //'friction':10,
      //  'density':1.0,
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y,20, height,width, options);
    this.width = width;
    this.height = height;
    //Matter.Body.setAngle(this.body,angle);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
};

  