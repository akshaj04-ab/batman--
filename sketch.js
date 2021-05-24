const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.Body;

var drops=[];
var Bruce;
var walking_1,walking_2,walking_3,walking_4,walking_5,walking_6,walking_7,walking_8;
var thunderBolt,boltIMG;
var engine,world;
var maxDrops=100;



function preload(){

 walking_1=loadImage("walking_1.png");
 walking_2=loadImage("walking_2.png");
 walking_3=loadImage("walking_3.png");
 walking_4=loadImage("walking_4.png");
 walking_5=loadImage("walking_5.png");
 walking_6=loadImage("walking_6.png");
 walking_7=loadImage("walking_7.png");
 walking_8=loadImage("walking_8.png"); 
    
}

function setup(){
  createCanvas(800,750);
  engine=Engine.create(engine);
  world=engine.world;

  var options={
     isStatic=true
  } 

  Bruce=Bodies.rectangle(200,200,5,5,options);
  Bruce.addAnimation(bruce,"walking_1","walking_2","walking_3","walking_4","walking_5","walking_6","walking_7","walking_8");


  Engine.run(engine);
    
}

function draw(){
   background(40,40,40);
   
   Engine.update(engine);

   for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,400),random(0,400),10))
   }
   
   for(var i=0;i<drops.lenght;i++){

      drops[i].display();
   
   }

   rect(200,200,5,5);

   drawSprites();
}   

