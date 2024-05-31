document.getElementById("fn").innerHTML = "FIRST NAME: " + window.localStorage.getItem("firstname", fn) + "</br>";
document.getElementById("ln").innerHTML = "LAST NAME: " + window.localStorage.getItem('lastname', ln) + "</br>";
document.getElementById("gndr").innerHTML = "GENDER: " + window.localStorage.getItem('gender', gndr) + "</br>";
document.getElementById("em").innerHTML = "EMAIL: " + window.localStorage.getItem('email', em) + "</br>";
document.getElementById("tx").innerHTML = "REASON IN SUPPORTING THE CAMPAIGN: " + window.localStorage.getItem('text', tx) + "</br>";

