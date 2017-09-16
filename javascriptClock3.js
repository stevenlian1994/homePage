function getTime() {
	var date = new Date;
	var value = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	document.querySelector("#clock").innerHTML = value;

}

setInterval(getTime,1000);



