var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "saleem13775" && password == "13775"){
window.location = "patientregistration.html"; // Redirecting to other page.
return false;
}
else{
alert("Please Enter A Valid ID or Password");
}
}