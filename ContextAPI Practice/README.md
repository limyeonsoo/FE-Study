# Context API

Context API  vs  Redux

[context API vs Redux](https://www.notion.so/context-API-vs-Redux-0c2d45ad3b4445e09797e9eb3c483f59)

전역 상태 관리

- 로그인 정보
- 애플리케이션 환경 설정
- 테마 설정
- 등,,,

Redux, React-Router, styled-components 모두 Context API를 기반으로 구현되어 있다.

![Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled.png](Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled.png)

전역 상태 관리를 몰라서 props로 state를 자식에게 주고, useCallback으로 자식으로 부터 받아오고 했었는데,
이 과정을 provider, consumer로 쉽게 할 수 있다.

1. **수작업** :
 A, B, E G를 타고가 G에게 전달.
 G, E, B, A를 거슬러 A에게 전달.
2. **context API :**
 Context를 이용해 한 번에 원하는 값을 사용.

# createContext

<src/contexts/color.js>

```jsx
import {createContext} from 'react';

const ColorContext = createContext({color:'black'});

export default ColorContext;
```

ColorBox.js 는 Render Props 패턴을 사용.
children 자리에 JSX, 문자열이 아니라 함수를 전달.
**component 호출 시 함수를 전달해서 함수의 결과를 렌더링 할 수 있음.**

Example)

```jsx
import React from ‘react‘;

const RenderPropsSample = ({ children }) => {
  return <div>결과: {children(5)}</div>;
};
export default RenderPropsSample;

=>

<RenderPropsSample>{value => 2 * value}</RenderPropsSample>;
```

<src/components/ColorBox.js>

```jsx
import React from 'react';
import ColorContext from '../contexts/color';

// Function as a child pattern
// or Render Props pattern

const ColorBox = () => {
    return(
        <ColorContext.Consumer>
        **{ value => (
            <div
            style={{
                width:'64px',
                height: '64px',
                background: value.color
            }}
            />
        )}**
        </ColorContext.Consumer>
    )
}
export default ColorBox;
```

<src/App.js>

```jsx
import React from 'react';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div>
      <ColorBox/>
    </div>
  );
}

export default App;
```

![Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%201.png](Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%201.png)

현재 ColorBox 를 부르고,
ColorBox는 Consumer를 통해 ColorContext에 접근한다.

## Provider

```jsx
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color:'red'}}>
      <div>
        <ColorBox/>
      </div>
    </ColorContext.Provider>
  );
}
```

App.js에서도 context의 **Provider**를 이용하면 바로 value에 접근을 하여 수정할 수 있다.

![Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%202.png](Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%202.png)

### 주의점

**단, Provider 를 사용할 때, value를 명시하지 않는다면, 기본 값을 사용하지 않고 오류가 발생.**

## 동적인 context 사용하기.

value 에는 상태 state 뿐만 아니라,
함수를 전달해 줄 수도 있다.

< 수정 >

actions 에 setColor, setSubcolor를 이용하여 상태를 변경할 수 있다.

```jsx
import {createContext} from 'react';
import React, {useState} from 'react';

const ColorContext = createContext({
    state : {
        color : 'black',
        subcolor: 'red',
    },
    actions:{
        setColor : () => {},
        setSubcolor : () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state : {color, subcolor},
        actions: {setColor, setSubcolor}
    };
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

// const ColorConsumer = ColorContext.Consumer 와 같다.
const {Consumer : ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};
export default ColorContext;
```

< 현재 >

color 라는 상태만 저장.

```jsx
const ColorContext = createContext({
    color:'black'
})
```

[바뀐점]

context 의 value가

state & actions 에서  color, subcolor, setColor, setSubcolor를 가지게 되었다.

ColorProvider라는 컴포넌트가 ColorContext.Provider를 렌더링 하고 있다.

Provider는 value에서 state와 actions를 묶어서 전달하고 있고,
객체를 따로 분리해서 사용하기 더 쉽게 하였다.

기존에 
`<ColorContext.Provider value={{color:'red'}}>`

이렇게 사용했지만, 이제 export 되는 ColorProvider를 이용해

`<ColorProvider>` 
로 이용할 수 있다.

기존에
`<ColorContext.Consumer>`

도 `<ColorCousumer>`
로 이용할 수 있다.

### SelectColor 구현하기  (like palette)

< SelectColor.js >

```jsx
import React from 'react';
import {ColorConsumer} from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
          <h2>색상을 선택하세요.</h2>
          <ColorConsumer>
          {({actions}) => (
              <div style={{ display: 'flex' }}>
              {colors.map(color => (
              <div
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}
                  onClick={() => actions.setColor(color)}
                  onContextMenu={e => {
                      e.preventDefault();
                      actions.setSubcolor(color);
                  }}
              />
            ))}
            </div>
          )}
          </ColorConsumer>
          <hr />
        </div>
      );
}

export default SelectColors;
```

![Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%203.png](Context%20API%207213cebf5cf1400fb81fff42e38b31ff/Untitled%203.png)

마우스 왼쪽 버튼 클릭 시 setColor Action에 의해 color 의 state 가 변환.

마우스 오른쪽 버튼 클릭 시 setSubcolor Action에 의해 subcolor 의 state 가 변환.
[https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers/oncontextmenu](https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers/oncontextmenu)
기본적으로 menu가 나오는데, preventDefault() 로 처리.

# useContext 사용.

hooks

Render Props Patter → useContext 로 대체.
state에 대한 접근 방법이 달라짐.

```jsx
import React from 'react';
import {ColorConsumer} from '../contexts/color';

const ColorBox = () => {
    return(
        <ColorConsumer>
        { value => (
        <>
            <div
            style={{
                width:'64px',
                height: '64px',
                background: value.state.color
            }}
            />
            <div
            style={{
                width:'32px',
                height: '32px',
                background: value.state.subcolor
            }}
            />
        </>
        )}
        </ColorConsumer>
    )
}
export default ColorBox;
```

```jsx
import React, {useContext} from 'react';
//import {ColorConsumer} from '../contexts/color';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return(
        <>
            <div
            style={{
                width:'64px',
                height: '64px',
                background: state.color
            }}
            />
            <div
            style={{
                width:'32px',
                height: '32px',
                background: state.subcolor
            }}
            />
        </>
    )
}
export default ColorBox;
```

- 함수를 전달해줘서 매칭 했던 Render Props 패턴이 사라지고, Hook 을 이용하여 바로 state에 접근 할 수 있다.

## class 형 컴포넌트의 단점.

class당 하나의 context를 사용할 수 있다.

useContext를 사용하지 못한다.