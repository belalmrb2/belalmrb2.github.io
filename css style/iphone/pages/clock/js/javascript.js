//    for timer in header class tache
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("timer-js").innerHTML = d.toLocaleTimeString();
}