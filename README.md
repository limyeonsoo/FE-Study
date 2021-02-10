# Redux
Redux Study

Redux는 React로만 사용할 수 있는게 아니다!

vanilla JS를 이용하여 Redux를 사용해보자.


# Redux

Redux X

Redux O

```jsx
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;  // 한 번만 일어나기 때문에 안된다.

const updateText = () => {
  console.log(count);
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText();
}
const handleMinus = () => {
  count = count -1;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
```

```jsx
import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if  (action.type === "ADD") return count+1;
  else if (action.type === "MINUS") return count-1;
  return count;
}
const onChange = () => {
  number.innerText = countStore.getState();
}

const countStore = createStore(countModifier);
countStore.subscribe(onChange);

add.addEventListener('click', ()=>{
  countStore.dispatch({type:"ADD"})
})
minus.addEventListener('click', ()=>{
  countStore.dispatch({type:"MINUS"});
})
```

$ npm install redux

`import {createStore} from 'redux'`

`const store = createStore( (reducer) );`

![Redux%202ef17f9382c0490d927b9e4cc1793e15/Untitled.png](Redux%202ef17f9382c0490d927b9e4cc1793e15/Untitled.png)

createStore에 의해 생긴 Object.

**dispatch** : reducer + (param +action )을 호출.

외부에서 reducer에 접근하기 위한 방법.

**getState** : state를 반환해줌.

**subscribe** : state의 변화를 알 수 있음.

## 1. createStore() : 매개변수로 Reducer를 알려줘야 한다.

## 2. Reducer : state, (application의 data)를 바꾸는 동작을 하는 함수.

- **Reducer가 반환하는 (return) 것은 application의 상태가 된다.**
- **즉, state를 바꿀 수 있는 것은 오직 reducer 밖에 없다.**
( React에서 state를 오직 setState가 바꾸는 것과 유사한 것 같다. )

    ### 매개변수

    1. state 에 대한 default initializing할 값.
    2. action  

        createStore().dispatch( :object )를 통해서 Reducer의 action을 호출 할 수 있음.

## 3. Action : application과 Reducer간의 메시지

- store.dispatch()를 통해 object형태로 보낼 수 있다. ⇒  {type : ... }

# ToDo

## **Vanilla JS ToDo**

```jsx
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
```

- 단순히 HTML의 DOM조작으로 시각적인 효과만 있다.
→ 애플리케이션의 Data, State가 없다.
→ 다시 실행했을 때, default로 돌아간다.

    ⇒ Redux를 이용하여 data를 유지할 수 있다.

## vanilla-ToDo-Redux

- Redux를 이용하여 Data를 가지자.
- store의 dispatch를 이용해 action을 감지한다.
- action의 TYPE에 맞게 Reducer를 적용시켜준다.
- **Reducer가 반환하는 새로운 state는 mutation(변형) 되면 안된다.**

    **⇒ 무조건 new Object를 반환해야한다.**

### Logic

1. **`input` tag를 통한** **수정 사항 →** 
2. **`store.dispatch()` 를 이용해 감지 →** 
3. **`reducer`에서 `action.type`별 새로운 `state` 반환 →** 
4. **`store.subscribe()`를 이용해 감지 →** 
5. **state를 이용하여 다시 render**

1. **`input` tag를 통한** **수정 사항 →** 

    ```html
    <input id="inputBox"/>
    <button id="submitBtn" type="submit">click</button>
    ```

2. **`store.dispatch()` 를 이용해 감지 →** 

    ```jsx
    const addToDo = text => {
        store.dispatch({type:ADD_TODO, text });
    };
    const delToDo = (e) => {
        const id = parseInt(e.target.parentNode.id);
        store.dispatch({type:DEL_TODO, id});
    }
    ```

3. **`reducer`에서 `action.type`별 새로운 `state` 반환 →** 

    ```jsx
    const reducer = (state=[], action) => {
        switch(action.type){
            case ADD_TODO:
                //renderToDo();
                //return [...state, {text:action.text, id: Date.now()}];
                return [{text:action.text, id: Date.now()}, ...state];
            case DEL_TODO:
                return state.filter(toDo => toDo.id !== action.id);
            default:
                return state;
        }
    }
    ```

4. **`store.subscribe()`를 이용해 감지 →** 

    ```jsx
    store.subscribe(()=>{console.log(store.getState())});
    store.subscribe(() => {renderToDo()});
    ```

5. **state를 이용하여 다시 render**

    ```jsx
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
    ```