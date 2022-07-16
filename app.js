
const thatDay = new Date("Jul 17, 2022 09:30:00").getTime()
function counter() {
	let dateCurrent = new Date().getTime(),
		 timeLeft = thatDay - dateCurrent
	let seconds = 1000,
		minutes = seconds * 60,
		hours = minutes * 60,
		days = hours * 24
	let dayLeft = addZero(Math.floor(timeLeft / days), 2),
		hourLeft = addZero(Math.floor((timeLeft % days) / hours), 2),
		mintueLeft = addZero(Math.floor((timeLeft % hours) / minutes), 2),
		secondLeft = addZero(Math.floor((timeLeft % minutes) / seconds), 2)


	function addZero(num, count) {
		return num.toString().padStart(count, "0")

	}
	document.getElementById("days").innerHTML = dayLeft
	document.getElementById("hours").innerHTML = hourLeft
	document.getElementById("minutes").innerHTML = mintueLeft
	document.getElementById("seconds").innerHTML = secondLeft

if(dayLeft<=00 && hourLeft<=00 && mintueLeft<=00 && secondLeft<=00){
	document.getElementById('timeup').style.transition="ease";
	document.getElementById('timeup').style.transitionDuration="30ms";
	document.getElementById('timeup').style.visibility="hidden";
	
	
}
	//problem is here

	
if(dayLeft<00 && hourLeft<00 && mintueLeft<00 && secondLeft<00){

	 document.getElementById('hidepage').style.visibility="visible";
	 document.getElementById('animation').style.visibility="visible";
}
	 
}
setInterval(() => {
	counter()
}, 1000)


