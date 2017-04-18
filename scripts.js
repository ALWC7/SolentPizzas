function time() {
	var today = new Date();	
	
	var curr_hour = today.getHours();
	var curr_minute = today.getMinutes();
	var curr_second = today.getSeconds();
	var ampm = (curr_hour >= 12) ? "PM" : "AM";
	var curr_time = curr_hour + ":" + curr_minute + " " + ampm; 
	document.getElementById("timeout").innerHTML = curr_time;
	
}

function date() {
	var date = new Date();
	var curr_date = date.toDateString();
	document.getElementById("dateout").innerHTML = curr_date;
	setInterval(time, 60000);
}



