//Canvas Drawing App Code Along was : https://www.youtube.com/watch?v=m4sioSqlXhQ

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var doc = document.getElementById('url');

var radius = 3;
var dragging = false;

context.lineWidth = radius*2;

var saveButton = document.getElementById("save");

saveButton.addEventListener('click', saveImage);

function saveImage() {

	var img = canvas.toDataURL("image/png");

	//prints out img url
	doc.innerHTML = img;
	
	// <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

}; 





var putPoint = function(e) {
	if(dragging) {
	// context.arc method takes 5 parameters 
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	context.beginPath();
	context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
	//context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(e.offsetX, e.offsetY);
	}
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}


canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);

