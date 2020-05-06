let data = document.getElementsByTagName("input")
let insert = document.getElementById("insert-task")
let deletebtn = document.getElementById("deletebtn")
let days = document.getElementById("days-wrapper")


insert.addEventListener("click", () => {

    document.getElementById(`${data[3].value}`).innerHTML += `<div class="taskcontainer">
            <div class="nome"> <h2>${data[0].value}</h2> </div> <div class="hora"> <p> ⏰ ${data[1].value}  ${data[2].value} </p> </div> <button id="xDelete" onclick="deleteTask()"> ❌ </button> <button id="xConclude" onclick="accomplishTask()"> ✔ </button></div>
            </div>`

    data[0].value = ""
    data[1].value = ""
    data[2].value = ""
    data[3].value = ""

})

function deleteTask() {
    let sure = confirm("Tem certeza que deseja apagar essa tarefa?")
    if (sure === true) {
        document.getElementById("xDelete").parentElement.style = "display: none"
    }
}

function accomplishTask() {
    document.getElementById("xConclude").parentElement.style = "text-decoration: line-through; "
}