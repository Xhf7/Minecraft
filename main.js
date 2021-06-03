

var canvas= new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 600;
player_y = 350;
player_object = "";


function player_update()

{
    fabric.Image.fromURL("player.png",function(Img)
    {
      player_object=Img;
      player_object.scaleToWidth(150)
      player_object.scaleToHeight(140)
      player_object.set(
         {
             top:player_y,
             left:player_x,

         }
      );
      canvas.add(player_object);
    }
    
    );

}
player_update();

function block_update(Img)

{
    fabric.Image.fromURL(Img,function(Img)
    {
      block_object=Img;
      block_object.scaleToWidth( block_image_width);
      block_object.scaleToHeight(block_image_height);
      block_object.set(
         {
             top:player_y,
             left:player_x,

         }
      );
      canvas.add(block_object);
    }
    
    );

}
block_update("cloud.jpg")
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed)
  if(e.shiftKey == true && keyPressed == "80")
  {
    console.log("p & shift")
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if(e.shiftKey == true && keyPressed == "77")
  {
    console.log("m & shift")
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if( keyPressed == '39')
{

 right()
 console.log("right")
}
if(keyPressed == '37')
{

 left()
 console.log("left")
}
if(keyPressed == '38')
{

 up()
 console.log("up")
}
if(keyPressed == '40')
{

 down()
 console.log("down")
}
if(keyPressed == '71')
{
  block_update("ground.png")
  console.log("g")
}
if(keyPressed == '76')
{
  block_update("light_green.png")
  console.log("l")

}
if(keyPressed == '84')
{
  block_update("trunk.jpg")
  console.log("t")
}
if(keyPressed == '82')
{
  block_update("roof.jpg")
  console.log("r")
}
if(keyPressed == '89')
{
  block_update("yellow_wall.png")
  console.log("y")
}
if(keyPressed == '68')
{
  block_update("dark_green.png")
  console.log("d")
}
if(keyPressed == '87')
{
  block_update("wall.jpg")
  console.log("w")
}
}
