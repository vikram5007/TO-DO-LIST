var moder = document.getElementById('mdbtn');
moder.addEventListener('click', theme);
var img = document.getElementById("mdimg");
var overlay = document.getElementById("overlay");
var opener = document.getElementById("opener");
var opener2 = document.getElementById("opener2");
var entry = document.getElementById("task");
var sub = document.getElementById("subbtn");
var h2heading = document.getElementById("taskslistheading");

var body = document.body;
var bgcolor;
var colorflag = "white";
var edit;
var btnclass;
var inpclass;



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
        showtasks();

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
        showtasks();

    }
}



window.addEventListener('load', () => {

    const forms = document.querySelector('#form');
    const input = document.querySelector("#task");
    const list = document.querySelector("#tasks");

    showtasks();
    forms.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (task.trim() != 0) {

            //local storage adding 

            let webstorage = localStorage.getItem("storedtasks");
            if (webstorage == null) {
                taskobject = [];
            }
            else {
                taskobject = JSON.parse(webstorage);
            }
            taskobject.push(task);
            localStorage.setItem("storedtasks", JSON.stringify(taskobject));
            input.value = "";
            showtasks();
        }
        else {
            alert("Please Enter A Task To Add Into List ");
        }
    });
});


function showtasks() {

    let webstorage = localStorage.getItem("storedtasks");
    if (webstorage == null) {
        taskobject = [];
    }
    else {
        taskobject = JSON.parse(webstorage);
    }

    let textfields = document.getElementById("tasks");
    let html = "";

    if(colorflag=="dark"){
        btnclass="blackedit";
        inpclass="taskdark"
    }else{
        btnclass="pinkedit";
        inpclass="task"
    }

    taskobject.forEach((item, index) => {

        console.log(index);
        html += ` <div class="${inpclass}">
        <div class="content">
            <input type="text" class="text" value="${item}" readonly id="textInput${index}">
        </div>
        <div class="actions">
            <button class="${btnclass}" onclick="editfunc(${index})" id="editbtn"> Edit </button>
            <button class="delete" onclick="deletefunc(${index})">Delete</button>

        </div>
        </div>`
    });
    
    textfields.innerHTML = html;
};


function editfunc(index) {

    let editbox = document.querySelectorAll(".text");
    let editbtn = document.querySelectorAll('#editbtn');
    let webstorage = localStorage.getItem("storedtasks");
    let taskobject = JSON.parse(webstorage);
    editbox[index].removeAttribute("readonly");
    editbtn[index].innerHTML = "Save";
    editbox[index].focus();
    editbtn[index].addEventListener("click", function () {

        if (editbox[index].value.trim() === '') {
            alert("Edit Task Field Is Empty ! Add Task To Edit ");
        } else {
            taskobject[index] = editbox[index].value;
            localStorage.setItem("storedtasks", JSON.stringify(taskobject));
            editbtn[index].innerHTML = "Edit";
            editbox[index].setAttribute("readonly", "readonly");
            showtasks();
        }
    });
}

function deletefunc(index) {

    var confirmation = confirm("Are you sure you want to delete?");

  if (confirmation) {
    showModal("Item deleted successfully.");
    let webstorage = localStorage.getItem("storedtasks");
    let taskobject = JSON.parse(webstorage);
    taskobject.splice(index, 1);
    localStorage.setItem("storedtasks", JSON.stringify(taskobject));
    showtasks();
  } else {
    showModal("Deletion cancelled.");
  }
    

}


// Get the modal element
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get the modal message element
var modalMessage = document.getElementById("modalMessage");

// Function to display the modal
function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

// Function to close the modal with fade-out animation
function closeModal() {
  modal.classList.add("fade-out");
  setTimeout(function() {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300); // Wait for the fade-out animation to complete before hiding the modal
}

// Add event listener to the delete button


// Add event listener to the close button
closeBtn.addEventListener("click", closeModal);


