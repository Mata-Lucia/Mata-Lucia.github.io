// Hello box

function slideOpen(){
	var elem = document.getElementById("box");
	elem.style.transition = "height 0.5s linear 0s";
	elem.style.height = "270px";
}
function slideClosed(){
	var elem = document.getElementById("box");
	elem.style.transition = "height 0.5s linear 0s";
	elem.style.height = "0px";
}

// Ball

var ball = document.querySelector("#ball");
var play = document.querySelector("#play");

play.onclick = function() {
    if (play.innerHTML === "play") {
    this.innerHTML = "Pause";
        if (!ball.classList.contains("kickball")) {
        ball.classList.add("kickball");
    }
    ball.classList.toggle("paused");
    } else {
        play.innerHTML = "play";
        ball.classList.toggle("paused");
    }
};

// Menu

document.getElementById("click").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}