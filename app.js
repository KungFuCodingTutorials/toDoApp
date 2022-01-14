
// Variables
let submitButton = document.querySelector('.insert');
let clearButton = document.querySelector('.clear');
let toDoContainer = document.querySelector('.toDoContainer');
let input = document.querySelector('input');

// Initialize counter to match the exactly row
let i = 0;

// Create to do function
let addTodo = function(toDoText){
    let createDiv = document.createElement('div');
    let createText = document.createElement('p');
    let inputValue = toDoText;
    toDoData.push(inputValue);
    createDiv.setAttribute('class','row');
    toDoContainer.appendChild(createDiv).appendChild(createText);
    storage.setItem('toDoData',JSON.stringify(toDoData));
    document.querySelectorAll('.row p')[i].innerText = inputValue;
    input.value = "";
    i++
}

// Storage the input among sessions
let storage = window.localStorage;
let toDoData = [];
const existingTodos = JSON.parse(storage.getItem('toDoData'))
const newToDoData = existingTodos || [];

// Take input from storage
newToDoData.forEach(toDo => {
    addTodo(toDo);
})

// Add to do
submitButton.addEventListener('click',function(){
    addTodo(input.value);
});

// Clear storage
clearButton.addEventListener('click',function(){
    storage.clear();
})