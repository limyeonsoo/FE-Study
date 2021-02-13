//import {createStore} from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
// const ADD = "ADD";
// const DEL = "DEL";

const addToDo = createAction("ADD");
const delToDo = createAction("DEL");
console.log(createAction);
// const reducer = (state = [], action) => {
//     switch(action.type){
//         case ADD:
//             return [{text : action.text, id : Date.now() }, ...state];
//         case DEL:
//             return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     }
// };

const reducer = createReducer ([],{
    [addToDo] : (state, action) => {
        state.push({text: action.payload, id: Date.now() });
    },
    [delToDo] : (state, action) =>
        state.filter(todo => todo.id !== action.payload)
});


export const actionCreators = {
    addToDo,
    delToDo
};

const store = configureStore({reducer});

export default store;