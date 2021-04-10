# Redux

# 기본 용어

[기본 용어](Redux%20e372b16a6d4047d19f40c9d7420fa365/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A5%2004732e80286b42819b7a335f5e8d87f7.md)

# 기본 규칙

1. 단일 스토어

    여러 개의 스토어를 사용할 수 있으나, 빈번한 애플리케이션 업데이트, 복잡한 상태 관리에 의해 권장되지 않음.

2. 읽기 전용 상태

    읽기 전용 상태 : 불변성을 유지 해줘야 한다. spread 연산자, immer와 같은 것으로 새로운  생성.

    → 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교 검사를 하기 때문.

3. 리듀서는 순수한 함수
    - 이전 상태 + 액션 객체를 param으로 받는다.
    - parameter 외 값에 의존 X
    - 이전 상태는 건드리지 않고, 새로운 상태 객체를 반환.
    - 리듀서 함수는 같은 Input에 대해 언제나 같은 값을 반환해야 함.
    Random, Date, Network 요청 등 X → 액션 or middle ware 에서 처리.
    - 

**Redux X**

**Redux O**

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

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled.png)

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

# 모든 Component에서 data 접근 하기 ⇒ (목적)

# Provider

하나의 component인데, 하위 component들이 Provider component를 이용해 redux store에 접근이 가능해진다.

```jsx
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
```

# Connect

[Connect | React Redux](https://react-redux.js.org/api/connect)

1. `mapStateToProps?: Function`
2. `mapDispatchToProps?: Function | Object`
3. `mergeProps?: Function`
4. `options?: Object`

**state : redux store의 state
ownProps : 현재 component의 부모에서 전달된 props**

## `mapStateToProps`

- store가 업데이트 될때마다 이 함수가 호출된다.
- 하지 않으려면, null, or undefined를 전달해주면 된다.
- parameter 2개 (state, ownProps) 를 이용해서 현재 component에서 store에 접근 할 수 있도록 도와준다.

    ```jsx
    function mapStateToProps(state, ownProps){
        return {toDos:state};
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Home);
    ```

## `mapDispatchToProps`

- component에 기본적으로 전달할 dispatch를 명시할 수 있다.
- parameter 2개 (dispatch, ownProps) 를 이용해서 현재 compoenent에서 dispatch를 사용할 수 있도록 도와준다.

    ```jsx
    function mapDispatchToProps(dispatch, ownProps){
        return{
            addToDo : text => dispatch(actionCreators.addToDo(text))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Home);
    ```

## `mergeProps`

- 최종적으로 어떻게 wrap 할건지 결정하기 위해서 사용한다.
- mergeProps를 사용하지 않으면 기본적으로 `{ ...ownProps, ...stateProps, ...dispatchProps }`가 된다.

# Redux Tool-kit

[Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

- **코드의 길이를 상당히 줄일 수 있음.**
- **기존의 새로운 상태를 반환해야 하는 단점에서 변형 된(mutation) 상태도 반환 가능함.**

## configureStore

store을 setup함에 있어 default가 되는 함수

```jsx
const store = createStore(reducer);
... => 
const store = configureStore({ reducer });
```

## createReducer

```jsx
const ADD = "ADD";
const DEL = "DEL";

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [{text : action.text, id : Date.now() }, ...state];
        case DEL:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};
```

- 무조건 mutation되지 않은 새로운 state를 반환 해야함.

```jsx
const reducer = createReducer([], {
  
[addToDo]: (state, action) => {
    **state.push**({ text: action.payload, id: Date.now() });
  },
  
[deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)

});
```

- immer기반으로 mutate한 state도 바로 사용할 수 있음.

## createAction

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%201.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%201.png)

```jsx
const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}
const delToDo = (id) => {
    return {
        type: DEL,
        id : parseInt(id)
    }
}

export const actionCreators = {
    addToDo,
    delToDo
};
```

- action의 type에 따라 reducer의 return값을 정하기 위한 type을 변수로 처리.

    - 문자열로 사용한다면 오타에 취약함.

```jsx
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  
	switch (action.type) {
			
			case addToDo.type:
			  return [{ text: action.payload, id: Date.now() }, ...state];
			
			case deleteToDo.type:
			  return state.filter(toDo => toDo.id !== action.payload);
	
	}
}
```

- createAction으로 생성된 action에는 type이 존재하므로 바로 사용할 수 있음.
- createAction의 payload로 data를 접근 할 수 있음.

## createSlice

- 내부적으로 createAction, createReducer를 모두 사용하는 하나의 API

```jsx
function createSlice({
    // A name, used in action types
    name: string,
    // The initial state for the reducer
    initialState: any,
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
    
})
```

---

# Container Component 와 Presentational Component 의 분리 패턴.

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%202.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%202.png)

- **코드의 재사용성 향상.**
- **관심사의 분리.**

## ./src/components

에 view를 담당하는 component들을 모아놓는다.

## 리덕스 관련 코드 패턴

### 1. actions, constants, reducers 디렉토리로 관리 하는 패턴.

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%203.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%203.png)

리덕스 공식 문서에도 사용되는 가장 기본적인 패턴.

단점 : 

Action 하나가 생성되면 3 디렉토리 모두 수정이 필요하다.

### 2. Ducks 패턴.

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%204.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%204.png)

1. 액션 타입
2. 액션 생성 함수
3. 리듀서 함수

3가지를 **기능별로 파일 하나에** 작성하는 방식.

⇒ 하나의 module 로 관리하겠다.

ex1) 간단 :  [https://github.com/limyeonsoo/React-Study/blob/master/Redux Practice/react-with-redux-pattern2/counter/src/modules/counter.js](https://github.com/limyeonsoo/React-Study/blob/master/Redux%20Practice/react-with-redux-pattern2/counter/src/modules/counter.js)

ex2) 복잡 :  [https://github.com/limyeonsoo/React-Study/blob/master/Redux Practice/react-with-redux-pattern2/counter/src/modules/todos.js](https://github.com/limyeonsoo/React-Study/blob/master/Redux%20Practice/react-with-redux-pattern2/counter/src/modules/todos.js)

## 루트 리듀서 만들기.

현재 counter, todos 2가지의 리듀서가 있다.

createStore 함수를 사용해 스토어를 만들 때, 하나의 reducer를 전달해주어야 하므로,
2가지의 리듀서를 합쳐주어야 하는데, **combineReducers**라는 유틸 함수로 쉽게 가능.

# store 생성하기.

<src/index.js>

```jsx
import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);
```

# Provider 적용하기.

하위 component에서 store에 접근할 수 있도록.

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App/>    
  </Provider>, 
  document.getElementById('root'));
```

## Redux Chrome DevTools

[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

1. 직접 명시.

    ```jsx
    const store = createStore(rootReducer,
      window.__REDUX_DEVTOOLSEXTENSION && window.__REDUX_DEVTOOLSEXTENSION_()
    );
    ```

2. node modules 를 통한 명시.

    ```jsx
    import { composeWithDevTools } from 'redux-devtools-extension';

    const store = createStore(rootReducer, composeWithDevTools());
    ```

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%205.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%205.png)

# 하위 Component 에서 접근하기.

1. connect 이용
2. hooks 이용
    1. useSelector
    2. useDispatch

### mapStateToProps

Redux Store안의 State를 Component의 Props로 넘겨주기 위해 설정하는 함수.

### mapDispatchToProps

Action 생성 함수를 Component의 Props로 넘겨주기 위해 설정하는 함수.

## connect 이용.

`connect(**mapStateToProps**, **mapDispatchToProps**)(연동할 **컴포넌트**)`

// react-redux에서 제공.

**connect**에서 반환된 함수에 연동할 **컴포넌트를** 전달해준다.

```jsx
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
makeContainer( Component )

/////////////////////////

const mapStateToProps = state => ({
  number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
```

```jsx
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(CounterContainer);
```

**동작 방식 동일.**

### dispatch로 action 생성함수를 감싸는 것에 대한 개선 방법. (1) ⇒

bindActionCreators 유틸 함수 이용

```jsx
import { bindActionCreators } from 'redux';
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);
```

### 개선 방법 (2)

mapDispatchToProps에서 함수 형태로 파라미터 전달을 하는 것이 아니라,
액션 생성 함수로 이루어진 **객체를** 전달.

```jsx
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
```

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%206.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%206.png)

![Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%207.png](Redux%20e372b16a6d4047d19f40c9d7420fa365/Untitled%207.png)

## hooks 이용.

정말 간단하다.

useSelector 는 현재 상태에 접근하기 위한 hook

useDispatch 는 Action을 호출하기 위한 hook

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../../store/userType'

const selector = useSelector((state) => console.log(state))

const dispatch = useDispatch()
dispatch(change(val))
```

- useSelector로 state에 한 번에 접근할 수 있다.
- useDisptach를 이용해 import 한 change라는 action에 접근할 수 있다.

### 성능 향상 useCallBack

useCallBack을 이용하면 성능을 향상 시킬 수 있다고 한다. (useDispatch와는 useCallBack을 함께 사용하는 습관을 들이라고 한다)

```
const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
```