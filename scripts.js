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

function rollon(leftside) {
	leftside.src = "media/banner2.png";
}

function rolloff(leftside) { 
	leftside.src = "media/banner.png";
}
function contactval() {
	var errormsg = ""
	var first_name = document.forms["contact"]["first_name"].value;
	var last_name = document.forms["contact"]["last_name"].value;
	var email = document.forms["contact"]["email"].value;
	var message = document.forms["contact"]["message"].value;
	if (first_name === "" || last_name === "" || email === "" || message === "")
	{
		errormsg = "Ensure you have entered your First Name, Last Name, Email and a Message"; 
	}
	if (errormsg != "")
	{
		alert(errormsg);
		return false;
	}
	else
	{
		return true;
	}
}
	

