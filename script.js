// code for analog clock
function clock()
{
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
	console.log(s);
	hr_angle=30*h+m/2;
	min_angle=6*m;
	sec_angle=6*s;
	
	hour.style.transform=`rotate(${hr_angle}deg)`;
	min.style.transform=`rotate(${min_angle}deg)`;
	sec.style.transform=`rotate(${sec_angle}deg)`;
}

setInterval( () => {clock()
}, 1000);


// for digital clock

function start()
{
  function updateClock() {
	 let date = new Date();
	 let hours = date.getHours();
	 let minutes = date.getMinutes();
	 let seconds = date.getSeconds();
	 let meridian = "AM";
	 if (hours > 12) {
		hours -= 12;
		meridian = "PM";
	 }
	 if (hours === 0) {
		hours = 12;
	 }
	 if (minutes < 10) {
		minutes = "0" + minutes;
	 }
	 if (seconds < 10) {
		seconds = "0" + seconds;
	 }
	 let time = hours + ":" + minutes + ":" + seconds + " " + meridian;
	 document.getElementById("clockDisplay").innerHTML = time;
  }
  setInterval(updateClock, 1000);
}
