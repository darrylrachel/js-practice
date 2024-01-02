// Add task functionality
///////////////////////////
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  } else {
    alert('Please enter a valid task!');
  }
  saveTasksToLocalStorage();
}

/*
  * Added event listener to the 'Add Task' button to trigger the addTask function.
  * Implemented addTask to create a new task item and append it to the task list.
*/

// Mark tasks as completed
////////////////////////////
taskList.addEventListener('click', markCompleted);

function markCompleted(event) {
  const clickedTask = event.target;

  if (clickedTask.tagName === 'LI') {
    clickedTask.classList.toggle('completed');
  }
}

/*
  * Added a click event listener to the task list to trigger the markCompleted function.
  * Impletemented markCompleted to toggle the 'completed' class on the clicked task
*/

// Delete Task
taskList.addEventListener('contextmenu', deleteTask);

function deleteTask(event) {
  event.preventDefault();

  const clickedTask = event.target;

  if (clickedTask.tagName === 'LI') {
    clickedTask.remove();
    saveTasksToLocalStorage();
  }
 
}

/*
  * Added a context menu (right-click) event listener to the task list to trigger the deleteTask function.
  * Implemented deleteTask to remove the clicked task from the list
*/

// Local storage integration
document.addEventListener('DOMContentLoaded', loadTasks);

function saveTasksToLocalStorage() {
  const tasks = Array.from(document.querySelectorAll('#task List li')).map(task => task.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (storedTasks) {
    storedTasks.forEach(taskText => {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
    });
  }
}

/*
  * Added event listener for when the DOM is fully loaded to trigger the loadTasks function.
  * Updated the addTask and deleteTask functions to saveTasksToLocalStorage.
  * Implemented saveTasksToLocalStorage to store tasks in local storage.
  * Implemented loadTasks to retieve and display tasks from local storage when the page loads.
*/