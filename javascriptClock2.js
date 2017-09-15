var sec0 = document.querySelector("#sec0");
var sec00= document.querySelector("#sec00");
var min0 = document.querySelector("#min0");
var min00 = document.querySelector("#min00");
var hour0 = document.querySelector("#hours0");
var hour00 = document.querySelector("#hours00");
var resetButton = document.querySelector("#resetButton");

var secInt0 = 0;
var secInt00 = 0;
var	minInt0 = 0;
var	minInt00 = 0;
var hourInt0 = 0;
var hourInt00 = 0;
var milliseconds=100;

setInterval(function(){
	//1s digit seconds resets at 10s
	if(secInt0===9){
		secInt0=-1;
		secInt00++;
		if(secInt00===6){
			secInt00=0;
			}
		sec00.textContent=secInt00;
	}
	//add 1 second in 1s intervals
	secInt0++;
	//changes 1st digit seconds (html)
	sec0.textContent = secInt0;
	},1*milliseconds
)
setInterval(function(){
	//1s digit seconds resets at 10s
	if(minInt0===9){
		minInt0=-1;
		minInt00++;
		
		if (minInt00===6)
			{minInt00=0;
			}
		min00.textContent=minInt00;
	}
	//add 1 minute in 60s intervals
	minInt0++;
	//changes 1st digit minutes (html)
	min0.textContent = minInt0;
},60*milliseconds
)
setInterval(function(){
	//1s digit hours resets at 10h
	if(hourInt0===9){
		hourInt0=-1;
		hourInt00++;	
		hour00.textContent=hourInt00;
	}
	//add 1 hour in 36,000s intervals
	hourInt0++;
	if(hourInt00===2){
		if(hourInt0===4){
			hourInt00=0;
			hour00.textContent=hourInt00;
			hourInt0=0;
		}
	}
	//changes 1st digit hours (html)
	hour0.textContent = hourInt0;
},3600*milliseconds
)

resetButton.addEventListener("click",function(){
	secInt0=-1;
	secInt00=0;
	minInt0=0;
	minInt00=0;
	hourInt0=0;
	hourInt00=0;
	sec0.textContent = secInt0;
	sec00.textContent = secInt00;
	min0.textContent = minInt0;
	min00.textContent = minInt00;
	hour0.textContent = hourInt0;
	hour00.textContent = hourInt00;
});