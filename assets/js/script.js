var moder = document.getElementById('mdbtn');
moder.addEventListener('click', theme);

var img = document.getElementById("mdimg");
var overlay = document.getElementById("overlay");
var opener = document.getElementById("opener");
var opener2 = document.getElementById("opener2");
var entry = document.getElementById("task");


function theme() {
   
    var body = document.body;
    var bgcolor = window.getComputedStyle(body).getPropertyValue('background-color');
    console.log(bgcolor);
    if (bgcolor == "rgb(255, 255, 255)") {
        body.style.background = "#161722";
        img.src = "/assets/icons/moon.png";
        img.style.filter = "invert(100)";
        overlay.style.background = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";
        overlay.style.opacity = "0.7";
        opener.style.color = "rgb(41,41,41)";
        opener2.style.color = "rgb(41,41,41)";
        opener2.style.textShadow = " 2px 2px 1px rgb(240, 240, 240)";
       entry.style.backgroundColor="#25273c";
       entry.style.color="white";
       
    }
    else {
        body.style.background = "white";
        img.src = "/assets/icons/brightness.png";
        img.style.filter = "invert(0)";
        overlay.style.background = "linear-gradient(90deg, rgba(193, 46, 127, 1) 0%, rgba(224, 29, 253, 1) 47%, rgba(136, 69, 252, 1) 100%)";
        overlay.style.opacity = "0.5";
        opener.style.color = "#ffffff";
        opener2.style.color = "white";
        opener2.style.textShadow = "2px 2px 2px rgb(0, 0, 0)";
        entry.style.backgroundColor="white";
        entry.style.color="rgb(70, 70, 70)";

    }

}