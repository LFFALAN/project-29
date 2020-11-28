var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  striker=new Striker(100,350)
  box1=new Enemy(330,235)
  box2=new Enemy(360,235)
  box3=new Enemy(390,235)
  box4=new Enemy(420,235)
  box5=new Enemy(450,235)
  box6=new Enemy(360,195)
  box7=new Enemy(390,195)
  box8=new Enemy(420,195)
  box9=new Enemy(390,275)
  box10=new Enemy(420,275)
  box11=new Enemy (405,315)
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("yellow");  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 