
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particle=[];
var plinko=[];
var division=[];
var engine,world;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,height,width,20);
    for(var k=0;k<=width;k=k+80){
      division.push(new Divisions(k,height-150,10,300))
    }
    for (var j=75;j<=width;j=j+50)
    {
      plinko.push(new Plinko(j,75));
  
    }
    for (var j=50;j<=width;j=j+50)
    {
      plinko.push(new Plinko(j,275));
}
for (var j=75;j<=width;j=j+50)
    {
      plinko.push(new Plinko(j,175));
}

}
function draw() {
  background(0);  
Engine.update(engine);
for(var k=0;k<division.length;k++){
  division[k].display();
}
for(var m=0;m<plinko.length;m++){
  plinko[m].display();
}

if(frameCount%60===0){
  particle.push(new Particle(random(width/2-30,width/2+30),10,10));
}
for(var h=0;h<particle.length;h++){
  particle[h].display();
}
}