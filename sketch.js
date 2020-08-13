var car,car1,car2,car3,wall,wall1,wall2,wall3;
var speed,weight;
var line,line1,line2,line3;
function setup() {
  createCanvas(1600,800);
  speed = random(45,90)
  weight= random(400,1500)

  car = createSprite(50,80,80,20);
  car.shapeColor =color("white");
  car.velocityX=speed;
  wall =createSprite(1500,80,50,100);
  wall.shapeColor=color(80,80,80);
  var line =createSprite(1000,150,2000,20);
  
  car1 = createSprite(1450,225,50,20);
  car1.shapeColor =color("yellow");
  wall1 =createSprite(1500,225,50,100);
  wall1.shapeColor=color(80,80,80);
  line1 =createSprite(1000,300,2000,20);

  car2 = createSprite(1450,370,50,20);
  car2.shapeColor =color("red");
  wall2 =createSprite(1500,370,50,100);
  wall2.shapeColor=color(80,80,80);
  line2 =createSprite(1000,450,2000,20);

  car3 = createSprite(1450,515,50,20);
  car3.shapeColor =color("green");
  wall3 =createSprite(1500,515,50,100);
  wall3.shapeColor=color(80,80,80);
  line3 =createSprite(1000,600,2000,20);
  
}

function draw() {
  background(0,0,0);  

if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation =(0.5*weight*speed*speed)/22500;
if(deformation>180){
  car.shapeColor=color("red");
  
}
if(deformation<180&&deformation>100){
  car.shapeColor=color("yellow");
}
if(deformation<100){
  car.shapeColor=color("green");
 
}
car.velocityX=0;
}
  drawSprites();

}

