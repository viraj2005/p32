class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Screenshot 2020-11-28 190444.jpg")
      this.visibility = 255
      
      World.add(world, this.body);
    }

score() {
  if(this.visibility < 255 && this.visibility > -105){
    score++
  }
}

      display(){
        if(this.body.speed < 3){
          console.log(this.body.speed)
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(4);
          stroke("green");
          fill(255);
          rect(0, 0, this.width, this.height);
          pop();
        
        }
        else{
          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }    
      }
    }