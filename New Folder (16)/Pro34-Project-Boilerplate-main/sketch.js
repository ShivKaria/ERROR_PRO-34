
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bg_image

function preload(){
  bg_image=loadImage("./assets/background.png")
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  bg=createImg(1600,800)
  bg.addImage('background',bg_image)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

