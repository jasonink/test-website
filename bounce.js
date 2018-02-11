var context;
var x=100;
var y=200;
var dx=5;
var dy=5;

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,1000/60);
}

function draw()
{
  context.clearRect(0,0,300,300);
  context.beginPath();
  context.fillStyle="#B9DD49";
  //Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  //Boundary logic
  if (x<20 || x>280) dx=-dx;
  if (y<20 || y>280) dy=-dy;
  x+=dx;
  y+=dy;
}
