const form = document.querySelector('#taskInput');
const newTaskText = document.querySelector('.newTaskText');
const btn = document.querySelector('.submit');
const noteList = document.querySelector('#noteList');


form.addEventListener('submit', (e) => {
    if(newTaskText.value.length == 0) {
        alert("Champ vide")
    } else {
        const li = document.createElement('li'); 
        li.innerHTML = newTaskText.value;
        noteList.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    e.preventDefault();
    newTaskText.value = "";
    saveData();
});

noteList.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", noteList.innerHTML)
}

function showTask(){
    noteList.innerHTML = localStorage.getItem("data");
}
showTask();