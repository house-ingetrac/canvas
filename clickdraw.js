var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = false;

var toggled = document.getElementById("toggle");
var cleared = document.getElementById("clear");

var clearer = function(e){
    e.preventDefault();
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

var draw = function(e){
    if(toggle){
	ctx.beginPath();
	ctx.fillRect(e.offsetX-10, e.offsetY-10, 20, 20);
	ctx.fill();
    }
    else{
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	ctx.fill();
    }
}



c.addEventListener("click", draw);
toggled.addEventListener("click", toggler);
cleared.addEventListener("click", clearer);


/*
fillStyle()
strokeStyle()
clearRect()
fillStyle()
*/
