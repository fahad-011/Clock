const clock = document.getElementById("clock");

var myInterval;

function startClock() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    clock.innerHTML = time;
} 

myInterval = setInterval(startClock, 1000);

startClock();