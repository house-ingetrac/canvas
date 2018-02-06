var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = false;
var line = true;

var toggled = document.getElementById("toggle");
var cleared = document.getElementById("clear");
var lined =  document.getElementById("line");

var clearer = function(e){
    e.preventDefault();
    ctx.closePath();
    ctx.beginPath();
    ctx.clearRect(0,0,600,600);
}

var toggler = function(e){
    if(toggle){
	toggle=false;
    }
    else{
	toggle=true;
    }
}

var liner = function(e){
    if(line){
	line=false;
    }
    else{
	line=true;
    }
}

var draw = function(e){
    if(line){
	if(toggle){
	    ctx.lineTo(e.offsetX, e.offsetY)
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.moveTo(e.offsetX, e.offsetY);
	    ctx.fillRect(e.offsetX-10, e.offsetY-10, 20, 20);
	    ctx.fill();
	}
	else{
	    ctx.lineTo(e.offsetX, e.offsetY)//makes line
	    ctx.stroke();//draws line
	    ctx.beginPath();
	    ctx.moveTo(e.offsetX, e.offsetY);
	    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	    ctx.fill();
	    ctx.moveTo(e.offsetX, e.offsetY);//puts it back in center so no tangent
	}
    }
    else{
	if(toggle){
	    ctx.beginPath();
	    ctx.fillRect(e.offsetX-10, e.offsetY-10, 20, 20);
	    ctx.fill();
	    ctx.moveTo(e.offsetX, e.offsetY);
	}
	else{
	    ctx.beginPath();
	    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	    ctx.fill();
	    ctx.moveTo(e.offsetX, e.offsetY);//puts it back in center so no tangent
	}
    }
}


c.addEventListener("click", draw);
toggled.addEventListener("click", toggler);
cleared.addEventListener("click", clearer);
lined.addEventListener("click", liner);

/*
fillStyle()
strokeStyle()
clearRect()
fillStyle()
*/
