<<<<<<< HEAD
import {createStore} from 'redux';

const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('submitBtn');
const ul = document.getElementById('ul');
=======
import createStore from 'redux';

const inputBox = document.getElementById('inputBox');
const btn = document.getElementById('submitBtn');
const body = document.getElementById('body');
>>>>>>> 03a629cd2847c0bed8db00176b1516fa4e5bc0d7

const ADD_TODO = "ADD";
const DEL_TODO = "DEL";

const reducer = (state=[], action) => {
    switch(action.type){
        case ADD_TODO:
<<<<<<< HEAD
            //renderToDo();
            //return [...state, {text:action.text, id: Date.now()}];
            return [{text:action.text, id: Date.now()}, ...state];
        case DEL_TODO:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
=======
            break;

        case DEL_TODO:
            break;
>>>>>>> 03a629cd2847c0bed8db00176b1516fa4e5bc0d7
    }
    return;
}

const store = createStore(reducer);

<<<<<<< HEAD
store.subscribe(()=>{console.log(store.getState())});
store.subscribe(() => {renderToDo()});

const addToDo = text => {
    store.dispatch({type:ADD_TODO, text });
};
const delToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch({type:DEL_TODO, id});
}
const renderToDo = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        let toDoItem = document.createElement('li');
        let delBtn = document.createElement('button');
        toDoItem.textContent = toDo.text;
        toDoItem.id = toDo.id;
        delBtn.textContent = "Del"
        delBtn.addEventListener('click',delToDo);
        toDoItem.appendChild(delBtn);
        ul.appendChild(toDoItem);
    });
}

const resetInput = () => {
    inputBox.value = "";
}

const clickEvt = (event) => {
    const text = inputBox.value;
    resetInput();
    addToDo(text);
}
const enterKeyEvt = (event) =>{
    if(event.keyCode == 13){
        const text = inputBox.value;
        resetInput()
        addToDo(text);
=======
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
>>>>>>> 03a629cd2847c0bed8db00176b1516fa4e5bc0d7
    }
}
inputBox.addEventListener('keypress', enterKeyEvt);
btn.addEventListener('click', clickEvt);