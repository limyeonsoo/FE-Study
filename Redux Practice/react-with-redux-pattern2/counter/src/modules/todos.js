// 1. Action Type 정의.
// '모듈 이름 / 액션 이름' 으로 지정하면 다른 모듈과 이름의 충돌을 방지.
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 2. Action 생성 함수 정의.
// parameter를 필드에 추가하는 것 추가.
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})

let id=3; // id 값에 대한 의존성 추가.
export const insert = text => ({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

// 3. Reducer와 initial State
// 객체에 한 개 이상의 값이 들어갈 때 불변성 유지 주의!
const initialState = {
    input: '',
    todos:[
        {
            id:1,
            text: 'Redux Basic',
            done : true
        },
        {
            id:2,
            text:'React and Redux',
            done : false
        }
    ]
}

function todos(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input:action.input
            }
        case INSERT:
            return{
                ...state,
                todos:state.todos.concat(action.todo)
            }
        case TOGGLE:
            return{
                ...state,
                todos:state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done:!todo.done} : todo
                )
            }
        case REMOVE:
            return{
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
    }
}
export default todos;