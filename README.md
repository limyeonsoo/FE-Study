# React

[깡으로 React 만들기](React%203652f7bbf64b4116b29390649f1bcaa7/%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23.md) 

[context API vs Redux](React%203652f7bbf64b4116b29390649f1bcaa7/context%20API%20vs%20Redux%200c2d45ad3b4445e09797e9eb3c483f59.md)

[Context API](React%203652f7bbf64b4116b29390649f1bcaa7/Context%20API%20099f3b32a86941fd9c583df09bb919ce.md) 

[Redux](React%203652f7bbf64b4116b29390649f1bcaa7/Redux%20e372b16a6d4047d19f40c9d7420fa365.md) 

[create-react-app 분석](React%203652f7bbf64b4116b29390649f1bcaa7/create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005.md) 

[SSR Practice](React%203652f7bbf64b4116b29390649f1bcaa7/SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73.md) 

## DOM

### DOM 이란?

- Document Object Model
- 객체로 문서 구조를 표현하는 방법 (XML, HTML 이용)

### DOM 이 느릴까?

**“요즘 자바스크립트 엔진은 매우 빠른 반면, DOM은 느리다”라고 하는데, 정확한 말은 아닙니다."**

- DOM은 정적 구조이고, 동적 UI에 최적화 되있지 않다.

    ⇒ 자바스크립트를 이용해 동적으로 만듬.

- 자바스크립트 객체 처리 성능과 비교할 때 다르지않음.
- BUT, DOM에 변화가 일어날때, 웹브라우저가 CSS연산, Layout 구성, Page 리페인트 등 업데이트가 자주 일어나면 성능이 저하될 수 있다.

    ⇒ DOM을 최소한으로 조작 작업 처리로 개선.

    **⇒ REACT의 Virtual DOM**

![React%203652f7bbf64b4116b29390649f1bcaa7/Untitled.png](React%203652f7bbf64b4116b29390649f1bcaa7/Untitled.png)

- 무조건 빠른 것은 아니다,

    React Manual : 지속적으로 데이터가 변화하는 대규모 앱 구축

## React는 라이브러리

- 다른 웹 프레임워크는 MVC, MVW등 구조 지향.
but, React는 View만 담당 하므로 프레임워크가 아니라 **라이브러리**.
- 다른 웹 프레임워크는 Ajax, 데이터모델링, 라우팅 내장
but, React는 직접 구현.
⇒ **라우팅** : react-router  
⇒ **Ajax 처리** : axios, fetch
⇒ **상태 관리** : redux, MobX
등을 다른 개발자들이 만들어 놓았다.

![React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%201.png](React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%201.png)

- 라이브러리 이므로 Backbone.js, Angular JS 등과도 사용 가능.

## 환경 설정

- Node.js와  npm/yarn 패키지 관리자 설치
- create-react-app을 통해 react project 생성.
웹팩, 바벨등이 자동으로 생성.
    - 웹팩 : 원래 브라우저에서는 모듈을 불러와서 사용하는 기능이 없지만, 번들러(웹팩,  Parcel, browserify 등)을 이용하여 파일을 묶어줌.(2017이후 브라우저는 import 구문 사용가능 단, js를 불러오는 용도일뿐 프로젝트 번들링 개념과 다름.)
    css-loader를 통해 css
    file-loader를 통해 웹 폰트, 미디어 파일도 불러올 수 있음.

        ![React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%202.png](React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%202.png)

    - 바벨 : ES5문법으로 변환.
    구버전 웹 브라우저와의 호환.
    JSX 문법도 정식 js가 아니기 때문에 ES5형태로 변환 필요.

## JSX

### 렌더링

- babel을 통해 번들링 과정에서 ES5로 변환됨.

JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법이 아닙니다. 바벨에서는 여러 문법을 지원할 수 있도록 preset 및 plugin을 설정합니다. 바벨을 통해 개발자들이 임의로 만든 문법, 혹은 차기 자바스크립트의 문법들을 사용할 수 있습니다.

변환전)

```jsx
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
```

**변환 후)**

```jsx
function App() {
return React.createElement(“div“, null, “Hello “, React.createElement(“b“, null, “react“));
}
```

- 가독성
- 활용도
- 컴포넌트 내부는 하나

    Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙

    <div>로 감싸기 or <Fragment>로 감싸기 or <> </> 로 감싸기

### javascript 표현식

- 삼항연산자, 조건부 연산자 이용

```jsx
function App() {
  const name = ‘리액트‘;
  return (
    <div>
      {name === ‘리액트‘ ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}
```

- var, let, const 주의

![React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%203.png](React%203652f7bbf64b4116b29390649f1bcaa7/Untitled%203.png)

- 주석

```jsx
javascript 처럼 {} 로 닫아 사용. {/* 주석 */}
```

- Undefind Rendering

```jsx
function App() {
  const name = undefined;
  return name;
}
=>App(…): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.

/* 오류 방지 */
function App() {
const name = undefined;
return name || ‘값이 undefined입니다.‘;
}

/* JSX 작성 */
function App() {
const name = undefined;
return <div>{name}</div>;
}

/* undefined일 때 표시 */
function App() {
  const name = undefined;
  return <div>{name || ‘리액트‘}</div>;
}
```

- class 대신 className 사용
- background-color 처럼 '-' 사용 X. 
⇒ camel 표기법으로 작성
- <input> <br> 같은 경우 </> 닫아주는 태그가 필요.

## Transfiling

- Webpack기반의 트랜스파일링 필요.

    트랜스파일링 :  syntax를 바꿔준다.

    Babel, Typescript, Coffescript 등등

## Component

### 함수형 컴포넌트

```jsx
import React from ‘react‘;
import ‘./App.css‘;

function App() {
  const name = ‘리액트‘;
  return <div className=“react“>{name}</div>;
}

export default App;
```

### 클래스 컴포넌트

```jsx
import React, { Component } from 'react';
 
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
 
export default App;
```

- ES5(prototype) → ES6 class 사용 가능.
- 함수형과 유사하지만,
state기능, 라이플사이클, 메서드 정의가 가능.

### 장단점

**함수형 컴포넌트**

- 편의성
- 메모리 자원 효율성
- 배포시 크기 효율성
- hooks

**클래스 컴포넌트** 

- state
- lifecycle API

## 함수형 컴포넌트

function(){}  // () ⇒ {} 의 차이

```jsx
function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function() {
      console.log(this.name + ': 멍멍!');
    }
  }
}
 
const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!
```

일반 함수는 자신이 종속된 객체를 this로 가리키며, 

```jsx
function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    }
  }
}
 
const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이: 멍멍!
```

화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.

## Props

properties : 컴포넌트의 속성 설정
부모 컴포넌트에서 설정.

### JSX 내부에서 props 렌더링

생성할 때

```jsx
const MyComponent = props => {
return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
```

### Props 값 지정

사용 할 때

```jsx
const App = () => {
  return <MyComponent name="React" />;
};
```

### defaultProps

Props가 정의 되어 있지만, 지정되지 않으면 ?

```jsx
const MyComponent = props => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
 
MyComponent.defaultProps = {
  name: '기본 이름'
};
```

### Child

props는 read-only로 쓰자.
자기 것만 수정하고 부모 것은 읽기만하자.

```jsx
const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
```

태그 사이의 내용을 보여줄 수 있음. 컴포넌트 호출 시 정의?

그냥 넘겨주면 되지 않을까?

```jsx
const MyComponent = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};
 
MyComponent.defaultProps = {
  name: '기본 이름'
};
```

```jsx
=> 안녕하세요, 제 이름은 기본 이름 입니다.
children값은 리액트입니다.
```

### Props 추출 후 활용

```jsx
const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};
```

==

```jsx
const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};
```

## Props검증을 위한 type지정

```jsx
import PropTypes from ‘prop-types‘;

MyComponent.propTypes = {
  name: PropTypes.string,
	favoriteNumber: PropTypes.number.**isRequired**
};
```

# map

filter 등 배열에 관한 것들을 쓸 수 있음.

```java
ex) const list = this.state.nameList.map( (v,i) ⇒ {
			<li key={i}>{v}</li>
		});

		return (
			<ul>
				{list}
			</ul>
		)
```

key 값이 필요한 이유 :  요소의 중간 부분도 virtual DOM에서 비교할 때 필요함.

[깡으로 React 만들기](React%203652f7bbf64b4116b29390649f1bcaa7/%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23.md)

# Context API

[Context API](React%203652f7bbf64b4116b29390649f1bcaa7/Context%20API%20099f3b32a86941fd9c583df09bb919ce.md)

# Redux

[Redux](React%203652f7bbf64b4116b29390649f1bcaa7/Redux%20e372b16a6d4047d19f40c9d7420fa365.md)

# create-react-app

[create-react-app 분석](React%203652f7bbf64b4116b29390649f1bcaa7/create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005.md)

# SSR Practice

[SSR Practice](React%203652f7bbf64b4116b29390649f1bcaa7/SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73.md)