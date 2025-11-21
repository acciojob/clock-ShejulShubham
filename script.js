//your JS code here. If required.
const timer = document.getElementById("timer");

setInterval(()=>{
	const date = new Date();
	const dateString = date.toLocaleDateString();
	const time = date.toLocaleTimeString();

	timer.textContent = `${dateString} ${time}`;	
	
}, 1000)