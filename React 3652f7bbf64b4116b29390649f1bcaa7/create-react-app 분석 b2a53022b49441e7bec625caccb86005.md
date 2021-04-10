# create-react-app 분석

# create-react-app 이란?

react/docs에서 새로운 React App을 만들기 위한 페이지를 보면, 크게 3가지 추천 툴체인이 있다.

1. **React 입문용 + SPA App  ⇒ create-react-app**
2. **SSR Node.js 웹 사이트      ⇒ Next.js**
3. **고정적인 콘텐츠 지향 웹      ⇒ Gatsby**

# 기본 구성

## Tool

![create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005/Untitled.png](create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005/Untitled.png)

- **React : View 를 위한 JS의 라이브러리**
- **BABEL : ES6 ++ 다양한 버전을 위한 JS 컴파일러**
- **Webpack : 다양한 파일을 합쳐주는 번들러**
- **.ENV : 환경변수 관리**
- **Jest : JS 테스트를 위한 프레임워크**
- **TypeScript : JS의 타입이 없는 단점을 개선하는 언어**
- **flow : 코드 작성 시 정적 타입 체크**
- **ESLint/Prettier : 개발 시 지켜야할 규칙 / 일정한 코드 포멧팅**

## Package

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

- **node_modules** : 구성에 필요한 여러 모듈들을 모아놓은 디렉토리
- **public** : React는 가상 DOM을 이용한다. 이 가상 DOM이 올라갈 진짜 DOM은 public/index.html이다.

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom'; //react 앱을 최초 렌더링 하기위해 엔트리 포인트에서 쓰인다. 브라우저 뿐만 아니라 서버사이드용 랜더링 메소드를 지원한다.

    ReactDOM.render(<App />, document.getElementById('root'));
    ```

    - 가상 DOM 컴포넌트 APP과 진짜 DOM html의 root를 이어준다.
    - **manifest.json** : PWA(Progressive Web App)을 사용하게 해준다.
    - **favicon**.**ico** : 웹의 상단 아이콘. React 로고가 연결되어 있다.
- `**import React from 'react';**` : react 컴포넌트의 필수적 코드.
- `**import ReactDOM from 'react-dom';**` : react 앱을 최초 렌더링 하기 위한 Entry.
- **service** **worker** : 네트워크가 느리거나, off-line상태에서도 on-line상태 인 것 처럼 resource들을 캐싱해서 보여주는 모듈.

# eject

경험 : [Webpack eject](https://www.notion.so/Webpack-eject-8eaea03e612e41f5bcf668d857ecc602) 

![create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005/Untitled%201.png](create-react-app%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20b2a53022b49441e7bec625caccb86005/Untitled%201.png)

create-react-app의 docs → 돌이킬 수 없다고 경고한다.

**< 언제 eject 할까? >**

1. Project에 대한 build, control을 모두 자기 자신이 직접 하려고 할 때.
2. create-react-app에서 기본 제공 되지 않는 것을 추가 하고자 할 때.
3. **궁금할 때.**

## Webpack

[webpack](https://www.notion.so/webpack-4072c43910364a77a741e25d08867812)