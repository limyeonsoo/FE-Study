const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('submitBtn');
const body = document.getElementById('body');

const addToDo = (event) => {
    let toDoItem = document.createElement('li');
    const text = inputBox.value;
    toDoItem.textContent = text;
    body.appendChild(toDoItem);
    inputBox.value = "";
}
const enterKeyEvt = (event) =>{
    if(event.keyCode == 13){
        addToDo(event);
    }
}
inputBox.addEventListener('keypress', enterKeyEvt);
btn.addEventListener('click', addToDo);