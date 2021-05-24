class bruce_wayne {

constructor(x,y){

var options={
'isStatic':true,
}



this.body=Bodies.circle(x,y,20,options);
this.image=loadImage("Walking Frame/walking_7.png");
World.add(world,this.body);

}

display(){

push();

var pos=this.body.position;

translate(pos.x,pos.y)

imageMode(CENTER);

image(this.image,pos.x,pos.y,this.r,this.r);

pop();

}
}