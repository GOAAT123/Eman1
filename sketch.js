const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var emanImg, eman;
var ground;

function preload(){
  emanImg=loadImage("PNG/eman1.png");
  backgroundImg=loadImage("PNG/city.png");
}

function setup() {
  createCanvas(600,200);
  eman=createSprite(60, 120, 50, 50);
  eman.addImage(emanImg);

  ground=createSprite(10, 180, 1200, 15);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}