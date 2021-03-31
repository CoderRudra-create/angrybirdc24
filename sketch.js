const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1= new Pig(810,350)
    box2 = new Box(920,320,70,70);
    wood1=new Wood(810,260,300,PI/2)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2=new Pig(810,220)
    wood2=new Wood(810,180,300,PI/2)
    wood4=new Wood(870,120,120,-PI/7)
    box5 = new Box(810,160,70,70);
    wood3=new Wood(760,120,150,PI/7)
    birdbomb=new Bird(100,100)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    wood1.display();
    wood2.display();
    wood3.display();
    wood4.display();
    pig1.display();
    pig2.display();
    birdbomb.display();
    ground.display();
}