document.getElementById("lefteye").style.backgroundColor =
    "red";
document.getElementById("head").style.backgroundColor =
    "orange";
document.getElementById("lefteye").style.borderRadius = 0;
document.getElementById("leftarm").style.height = "20%";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
//document.getElementById("head").style.borderTop =
"5px black solid";
//document.getElementById("head").style.transform = "ratate(15deg)";

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {

    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 15) {
            clearInterval(id);
        }
    }
}
var rightnose = document.getElementById("rightnose");
nose.addEventListener("click", moveNoseRight);

function moveNoseRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + "%";
        left--;
        if (left === 40) {
            clearInterval(id);
        }
    }
}
var rightmouth = document.getElementById("rightmouth");
mouth.addEventListener("click", moveMouthRight);

function moveMouthRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + "%";
        left--;
        if (left === 20) {
            clearInterval(id);
        }
    }
}
var headrotate = document.getElementById("headrotate");
headrotate.addEventListener("click", moveheadrotate);

function moveheadrotate(e) {
    var robotPart = e.target;
    var top = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + "%";
        top--;
        if (top === 50) {
            clearInterval(id);
        }
    }
}