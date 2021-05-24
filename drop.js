class Drops {
constructor(x,y,r){

 var options={

    'isStatic':false,
    'density':1,
    'friction':0.3
    

 }
this.r=r;

 this.body=Bodies.circle(x,y,r,options);
 World.add(world,this.body);

}
display(){

push();

var pos=this.body.position;

translate(pos.x,pos.y);

ellipseMode(RADIUS);

ellipse(pos.x,pos.y,this.r,this.r);

pop();

   
}

updatePosition(){

if(this.Drops.position.y>height){
Matter.setPosition(this.Drops,{x:random(0,400),y:random(0,400)});
}


}

}