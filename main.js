var mouseEvent = "empty";

var LastpositionofX, LastpositionofY;

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var color = "red";

var width_of_LINE = 5;

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e)
{
    mouseEvent = "mousedown";
    
}


canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e)
{
    mouseEvent = "mouseup";
    
}


canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e)
{
    mouseEvent = "mouseleave";
    
}


canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e)
{
  CurrentpositionofmouseX = e.clientX - canvas.offsetLeft;
  CurrentpositionofmouseY = e.clientY - canvas.offsetTop;  

  if(mouseEvent == "mousedown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.linewidth = width_of_LINE;
      console.log("Last position of X and Y = ");
      console.log("X ="+ LastpositionofX+"Y ="+LastpositionofY);

      ctx.moveTo(LastpositionofX, LastpositionofY);



    console.log("Current position of X and Y = ");
    console.log("X ="+ CurrentpositionofmouseX+"Y ="+CurrentpositionofmouseY);

    ctx.lineTo(CurrentpositionofmouseX, CurrentpositionofmouseY);
    ctx.stroke()
  }
  LastpositionofX = CurrentpositionofmouseX;
  LastpositionofY = CurrentpositionofmouseY;
}