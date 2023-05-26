var moder = document.getElementById('mdbtn');
moder.addEventListener('click', theme);
var img = document.getElementById("mdimg");
var overlay = document.getElementById("overlay");
var opener = document.getElementById("opener");
var opener2 = document.getElementById("opener2");
var entry = document.getElementById("task");
var sub = document.getElementById("subbtn");
var h2heading = document.getElementById("taskslistheading");
var taskboxs = document.querySelectorAll(".task");
var editbtn = document.querySelectorAll('.edit');
var body = document.body;
var bgcolor;
var colorflag = "white";
var edit_elements = [];
var box_elements = [];

function theme() {

    var bgcolor = window.getComputedStyle(body).getPropertyValue('background-color');

    if (bgcolor == "rgb(255, 255, 255)") {

        body.style.backgroundColor = "rgb(22, 23, 34)"
        colorflag = "dark";
        console.log("if " + colorflag);
        img.src = "/assets/icons/brightness.png";
        img.style.filter = "invert(100)";
        overlay.style.background = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";
        overlay.style.opacity = "0.7";
        opener.style.color = "rgb(41,41,41)";
        opener2.style.color = "rgb(41,41,41)";
        opener2.style.textShadow = " 2px 2px 1px rgb(240, 240, 240)";
        entry.style.backgroundColor = "#25273c";
        entry.style.color = "white";
        sub.style.background = "linear-gradient(180deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )";
        h2heading.style.background = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";
        h2heading.style.WebkitBackgroundClip = "text";
        h2heading.style.WebkitTextFillColor = "transparent";
        for (let i = 0; i < edit_elements.length; i++) {
            var elements = edit_elements[i];
            elements.classList.remove('pinkedit');
            elements.classList.add('blackedit');
            var box = box_elements[i];
            box.style.backgroundColor = "rgb(37 39 60)";
        }

    }
    else {

        body.style.background = "white";
        colorflag = "white";
        console.log("else " + colorflag);
        img.src = "/assets/icons/moon.png";
        img.style.filter = "invert(0)";
        overlay.style.background = "linear-gradient(90deg, rgba(193, 46, 127, 1) 0%, rgba(224, 29, 253, 1) 47%, rgba(136, 69, 252, 1) 100%)";
        overlay.style.opacity = "0.5";
        opener.style.color = "#ffffff";
        opener2.style.color = "white";
        opener2.style.textShadow = "2px 2px 2px rgb(0, 0, 0)";
        entry.style.backgroundColor = "white";
        entry.style.color = "rgb(70, 70, 70)";
        sub.style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
        h2heading.style.background = "linear-gradient(90deg, rgba(193, 46, 127, 1) 0%, rgba(224, 29, 253, 1) 47%, rgba(136, 69, 252, 1) 100%)";
        h2heading.style.WebkitBackgroundClip = "text";
        h2heading.style.WebkitTextFillColor = "transparent";
        for (let i = 0; i < taskboxs.length; i++) {
            taskboxs[i].style.backgroundColor = "rgb(77, 77, 77)";
        }
        for (let i = 0; i < edit_elements.length; i++) {
            var elements = edit_elements[i];
            elements.classList.remove('blackedit');
            elements.classList.add('pinkedit');
            var box = box_elements[i];
            box.style.backgroundColor = "rgb(77, 77, 77)";
        }
    }
}

window.addEventListener('load', () => {

    const forms = document.querySelector('#form');
    const input = document.querySelector("#task");
    const list = document.querySelector("#tasks");


    forms.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("Add Something To The List ");
            return;
        }


        const task_element = document.createElement("div");
        task_element.classList.add("task");
        box_elements.push(task_element);
        const task_content = document.createElement("div");

        task_content.classList.add("content");

        task_element.appendChild(task_content);

        const input_element = document.createElement("input");
        input_element.classList.add("text");
        input_element.type = "text";
        input_element.value = task;
        input_element.setAttribute("readonly", "asd");

        task_content.appendChild(input_element);

        const actions = document.createElement("div");
        actions.classList.add("actions");

        edit = document.createElement("button");
        edit_elements.push(edit);

        if (colorflag == "white") {
            edit.classList.add('pinkedit');
            task_element.style.backgroundColor = "rgb(77, 77, 77)";
        } else {
            edit.classList.add('blackedit');
            task_element.style.backgroundColor = "rgb(37 39 60)";
        }

        edit.classList.add("edit");

        edit.innerHTML = "Edit";

        const deleter = document.createElement("button");
        deleter.classList.add("delete");
        deleter.innerHTML = "Delete";

        actions.appendChild(edit);
        actions.appendChild(deleter);

        task_element.appendChild(actions);

        list.appendChild(task_element);

        input.value = "";

    })
})