// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);


// Functions

function addTodo(event){
 // prevent form from submitting
 event.preventDefault();
// Todo div 
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// ADD TODO TO 
saveLocalTodos(todoInput.value);
// check mark button
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);

// CHECK edit Button
const editButton = document.createElement('button');
editButton.innerHTML = '<i class="fas fa-edit btnedit"></i>';
editButton.classList.add('edit-btn');
todoDiv.appendChild(editButton);

// CHECK trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash btndelete">';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);


// appent to list 
todoList.appendChild(todoDiv);

// clear Todo Input Value
todoInput.value = '';


}
// delete item 
function deleteCheck(e){
  const item = e.target;
  // delete todo 
  if (item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    // animation 
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function(){
      todo.remove();
    });

  };


  // check mark 
  if (item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  };

}


// local storage 

function saveLocalTodos(todo){

  //check--- hey  do I have any items yet ?
   let todos;
   if (localStorage.getItem('todos') === null){
    todos = [];
   } else {
    todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));
}


function getTodos (){
  let todos;
   if (localStorage.getItem('todos') === null){
    todos = [];
   } else {
    todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.forEach(function(todo) {

    // Todo div 
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todo;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

// check mark button
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);

// CHECK edit Button
const editButton = document.createElement('button');
editButton.innerHTML = '<i class="fas fa-edit btnedit"></i>';
editButton.classList.add('edit-btn');
todoDiv.appendChild(editButton);

// CHECK trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash btndelete">';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);


// appent to list 
todoList.appendChild(todoDiv);

    
   });


}

function removeLocalTodos(todo){

   //check--- hey  do I have any items yet ?
   let todos;
   if (localStorage.getItem('todos') === null){
    todos = [];
   } else {
    todos = JSON.parse(localStorage.getItem("todos"));
   } 
   const todoIndex = todo.children[0].innerText;
   todos.splice (todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos", JSON.stringify(todos));

}







