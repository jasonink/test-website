var context;
var img;
var width = 600;
var height = 500;
var radius = 50;
var x=100;
var y=200;
var dx=5;
var dy=5;

function init()
{
  context= myCanvas.getContext('2d');
  //resize canvas to the window size
  context.canvas.width = width;
  context.canvas.height = height;
  img = new Image();
  img.src = "corgi_face.png";
  //draw at 60fps
  setInterval(draw,1000/60);           
}

function draw()
{
  context.clearRect(0,0,width,height);
  // context.beginPath();
  // context.fillStyle="#B9DD49";
  // //Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  // context.arc(x,y,radius,0,Math.PI*2,true);
  // context.closePath();
  // context.fill();
  context.drawImage(img,x,y);
  //Boundary logic
  if (x<0 || x>width - 100) dx=-dx;
  if (y<0 || y>height - 100) dy=-dy;
  x+=dx;
  y+=dy;
}
