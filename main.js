canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_of_x,last_position_of_y;

color = "black";
width_of_line = 1;
radius = 40;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    

    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    

    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_X =  e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,radius,0,2*Math.PI);
        ctx.stroke();

    }
}

function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}