// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

const myForm = document.getElementById("create-task-form")

function handleDelete(e){
  e.target.parentElement.remove()
}

function listenForSubmit(e){
  e.preventDefault()
  const newTask = e.target["new-task-description"].value
  const taskUL = document.querySelector("#tasks")
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "X"
  deleteButton.addEventListener("click", handleDelete)
  const LI = document.createElement("li")
  LI.textContent = newTask
  LI.append(deleteButton)
  taskUL.appendChild(LI)
  e.target.reset()
}


myForm.addEventListener("submit", listenForSubmit)