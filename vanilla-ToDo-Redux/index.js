import createStore from 'redux';

const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('submitBtn');
const body = document.getElementById('body');

const ADD_TODO = "ADD";
const DEL_TODO = "DEL";

const reducer = (state=[], action) => {
    switch(action.type){
        case ADD_TODO:
            break;

        case DEL_TODO:
            break;
    }
    return;
}

const store = createStore(reducer);

const clickEvt = (event) => {
    let toDoItem = document.createElement('li');
    const text = inputBox.value;
    toDoItem.textContent = text;
    body.appendChild(toDoItem);
    inputBox.value = "";

    store.dispatch({type:ADD_TODO, text: toDo});
}
const enterKeyEvt = (event) =>{
    if(event.keyCode == 13){
        addToDo(event);
    }
}
inputBox.addEventListener('keypress', enterKeyEvt);
btn.addEventListener('click', clickEvt);