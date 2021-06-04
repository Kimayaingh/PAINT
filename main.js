
var last_position_of_x, last_position_of_y;
var color_input,width_input;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width=screen.width;
var newidth=screen.width-70;
var newheight=screen.height-300;

color = color_input;
width_of_line= width_input;
if (width<992){
document.getElementById ("myCanvas").width=newidth;
document.getElementById ("myCanvas").height=newheight;
document.body.style.overflow=hidden;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{

    color = document.getElementById(color_input).value;
    width_of_line = document.getElementById(width_input).value;

console.log ("The user has clicked")
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log ("The drawing has started");

     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}

