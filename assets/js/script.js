var buttonEl = document.querySelector("#save-task");
//console.log(buttonEl);
var tasksToDoEL = document.querySelector("#tasks-to-do");

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});


var createTaskHandler = function() { 
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); 
    };
  
  buttonEl.addEventListener("click", createTaskHandler);
  //window.document.querySelector("button");