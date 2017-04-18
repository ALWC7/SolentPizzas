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

function contactrealtimeval() {
	var first_name = document.forms["contact"]["first_name"].value;
	var last_name = document.forms["contact"]["last_name"].value;
	var email = document.forms["contact"]["email"].value;
	var message = document.forms["contact"]["message"].value;
	document.getElementById("first_name").style.backgroundColor = ""
	document.getElementById("last_name").style.backgroundColor = ""
	document.getElementById("email").style.backgroundColor = ""
	document.getElementById("message").style.backgroundColor = ""
	if (first_name === "") {
		document.getElementById("first_name").style.backgroundColor = "red"
	}
	if (last_name === "") {
		document.getElementById("last_name").style.backgroundColor = "red"
	}
	if (email === "") {
		document.getElementById("email").style.backgroundColor = "red"
	}
	if (message === "") {
		document.getElementById("message").style.backgroundColor = "red"
	}
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

function orderval() {
	var errormsg = "selct:";
	var basenum = document.getElementsByName("base");
	var isbaseckd = false;
	for (var counter = 0; counter < basenum.length; counter++) {
	if(basenum[counter].checked) {
	isbaseckd = true;
	break;
	}
	}
	if (!isbaseckd) 
	{
	errormsg = errormsg + " a base";
	}
	var toppingnum = document.getElementsByName("topp");
	var istoppingckd = false;
	for (counter = 0; counter < toppingnum.length; counter++) {
	if(toppingnum[counter].checked) {
	istoppingckd = true;
	break;
		}
	}
	if (!istoppingckd)
	{
		errormsg = errormsg + " a topping";
	}	
	if (!isbaseckd + !istoppingckd)
	{
		alert(errormsg);
		return false;
	}
	else
	{
		return true;
	}
}
	

