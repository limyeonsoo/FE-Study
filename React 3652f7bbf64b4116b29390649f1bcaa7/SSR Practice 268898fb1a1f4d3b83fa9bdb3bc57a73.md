# SSR Practice

CRA는 기본적으로 Client-Side-Rendering인데, SSR은 next.js를 써야된다고 알았는데, CRA로 될까??

`npx create-react-app [package]`

`npm start`

# Client Side Rendering 확인.

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%201.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%201.png)

- 가장 먼저 localhost가 올라온다.
- 해당 소스코드를 보면 root element가 비어있다.

    → 즉, 올라오고 난 후, 렌더링이 실행되서 content를 띄워준다.

# Gatsby와 비교.

내가 사용하고 있던 Gatsby는 처음에 어떻게 띄울까?

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%202.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%202.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%203.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%203.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%204.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%204.png)

1. 역시 localhost만 먼저 올라온다.
2. localhost를 보면 /commons.js 를 가져온다.
3. commons.js를 가면 엄청나게 많은 데이터가 있고, 내가 만든 Profile이라는 것이 올라와있다.

    이미 build된 것들을 정적으로 보여주기 때문에 그런 것 같다.

# SSR의 장점.

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%205.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%205.png)

## < 장점 >

- 검색엔진 최적화

    구글 엔진에는 JavaScript를 실행해주는 기능이 탑재 되어 있어 크롤링 할 때도 있지만, 모든 것에 적용 되는 것은 아님.

    웹 서비스의 검색 엔진 최적화를 위해서라면 서버 사이드 렌더링 구현이 좋다.

- 초기 렌더링 성능 개선

    Client가 접속 후, JS 로딩, 실행 될 때까지 비어 있는 페이지를 보며 대기해야 할 수 있음.

    API 호출 같은 시간이 더 오래 걸린다면 불편해짐.

## < 단점 >

- 서버 리소스 사용

    Browser가 원래 하던 일을 Server가 미리 대신 처리 해주는 것.

    즉, 서버에 과부하가 걸릴 수도 있다. (이용자가 많다면)

    ⇒ 캐싱, 로드밸런싱 등 성능 최적화 필요.

- 프로젝트 구조 복잡
    - 데이터 미리 불러오기
    - 코드 스플리팅과의 호환

        ![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%206.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%206.png)

        ➊ 서버 사이드 렌더링된 결과물이 브라우저에 나타남

        ➋ 자바스크립트 파일 로딩 시작

        ➌ 자바스크립트가 실행되면서 아직 불러오지 않은 컴포넌트를 null로 렌더링함

        ➍ 페이지에서 코드 스플리팅된 컴포넌트들이 사라짐

        ➎ 코드 스플리팅된 컴포넌트들이 로딩된 이후 제대로 나타남

        <solve>

        스플리팅된 파일 중에서 필요한 것을 미리 렌더링하기 전에 불러오는 방법.

        Loadable Components 라이브러리에서 제공하는 기능으로 SSR후 필요한 파일 경로 추출하여 렌더링 결과에 script/style Tag 삽입.

    - 고려사항 ☝️

`npm install react-router-dom`

```jsx
import {Link} from 'react-router-dom';
// => Link Tag를 이용하여 url 변경.

import {Route} from 'react-router-dom';
// => Route Tag를 이용하여 path에 대한 component 변경.
```

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%207.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%207.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%208.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%208.png)

[Link & Route · limyeonsoo/Redux@5ab1040](https://github.com/limyeonsoo/Redux/commit/5ab1040dcbc8c8f23887b69c2abfe9a5396e99f0#diff-935b4dbb697f27bf0183629fbd1ce8d20a0017666a779d2a818200e884b8ff78)

# 서버 사이드 렌더링을 위한 webpack eject

( 실패작 )

### webpack이 가장 먼저 불러오는 것.

entry 에서 시작해서 dest나 public 등 지정한 곳에 파일 작성.

### SSR을 위한 엔트리 파일을 따로 생성해보자.

1. webpack 설정을 해준다. (server용으로 가져가고 반환할 수 있도록...)

    가져갈 js 파일 index.server.js

    시작하고 끝낼 정보를 알려줄 webpack.config.server.js

2. webpack server에 대한 loader 설정.

## 1. 서버용 webpack 설정.

src/index.server.js

```jsx
import React from 'react';
**import ReactDOMServer from 'react-dom/server';**

const html = **ReactDOMServer.renderToString**(
    <div>Hello Server Side Rendering!</div>
)

console.log(html);
```

렌더링 결과를 문자열로 반환해주는 로직.

```jsx
<config/paths.js>

ssrIndexJs: resolveApp('src/index.server.js'), // Server Side Rendering Entry point
ssrBuild : resolveApp('dist') // saving path after webpack processing
```

webpack이 SSR 엔트리를 알 수 있고, 처리할 수 있도록 추가해준다.

**ssrIndexJs : entry**

**ssrBuild : dest**

**path.js는 단지 경로 설정을 위한 존재일 뿐. 
const resolveApp = relativePath => path.resolve(appDirectory, relativePath); 경로 설정을 위한 도구.**

```jsx
const paths = require('./paths');

module.exports = {
    mode: 'production',         // production mode
    entry : paths.ssrIndexJs,   // Entry
    target: 'node',             // node environment
    output: {                   // dest information
        path : paths.ssrBuild,
        filename : 'server.js',
        chunkFilename : 'js/[name].chunk.js',
        publicPath : paths.servedPath,
    }
}
```

webpack.config.js 를 작성한거 처럼 webpack.config.server.js를 작성해준다. 

[webpack](https://www.notion.so/webpack-4072c43910364a77a741e25d08867812)

## 2. 서버용 로더 설정.

1. JavaScript를 위한 처리.
    - **js mjs jsx ts tsx**
2. CSS를 위한 처리.
    - **/.css$/**
3. CSS module을 위한 처리.
    - **/.module.css$/**
4. Sass를 위한 처리.
    - **/.(scss|sass)$/**
5. Sass module을 위한 처리.
    - **/.module.(scss|sass)$/**
6. url-loader를 위한 처리.
    - **[/.bmp$/, /.gif$/, /.jpe?g$/, /.png$/]**
7. 나머지 file을 위한 처리.
    - **exclude: [/.(js|mjs|jsx|ts|tsx)$/, /.html$/, /.json$/],**

webpack module: 의 rules: 의 oneOf :  [https://webpack.js.org/configuration/module/#nested-rules](https://webpack.js.org/configuration/module/#nested-rules)

중첩을 위함.

## 3. 서버에서 node_modules 내부 라이브러리 접근.

```jsx
<webpack.config.server.js>

...
resolve : {
	modules : ['node_modules']
}
```

react, react-dom/server와 같은 라이브러리를 import 구문으로 불러오면 node_modules에서 찾아서 사용.
→ 빌드할 때 같이 번들링.

When Browser :    in Result File  =  React Library + Application Code

But, Server : React Library는 node_modules을 불러와 사용할 수 있어서 **번들링 제외.**

⇒ webpack-node-externals

```jsx
const nodeExternals = require('webpack-node-externals');
... 
externals: [nodeExternals()]
```

## 4. 환경변수 주입.

```jsx
const webpack = require('webpack');
const getClientEnvironment = require('./env');

~~// const publicUrl = paths.servedPath.slice(0,-1);
// const env = getClientEnvironment(publicUrl);~~

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0,-1));

...
plugins:[
	new webpack.DefinePlugin(env.stringified)
]

//////
output: {                   // dest information
    ... ...
    publicPath: paths.publicUrlOrPath,
},
```

⇒ process.env.NODE_ENV 값 참조 가능. ( ToDo : 전에는 dotenv를 썼었는데, 차이가 뭘까 )

**/ Error : [https://github.com/velopert/learning-react/issues/259](https://github.com/velopert/learning-react/issues/259)**

---

### 환경설정 끝.

# 빌드 스크립트 작성하기

scripts/build.js ⇒ 클라이언트에서 사용할 빌드 파일을 만드는 작업.

scripts/build.server.js ⇒ 서버에서 사용할 빌드 파일을 만드는 작업을 하도록 작성해주어야 함.

< scripts/build.server.js >

```jsx
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');

function build(){
    console.log('Creating Server Build');
    fs.emptyDirSync(paths.ssrBuild);
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(stats.toString());
        });
    });
};
build();
```

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%209.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%209.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2010.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2010.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2011.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2011.png)

### package.json에 script화 시키기

< package.json >

```jsx
"scripts": {
  "start": "node scripts/start.js",
  "build": "node scripts/build.js",
  "test": "node scripts/test.js",
  "start:server": "node dist/server.js",
  "build:server" : "node scripts/build.server.js"
},
```

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2012.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2012.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2013.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2013.png)

# 서버 코드 작성하기 (with Express)

`npm install express`

**< src/index.server.js >**

```jsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const app = express();

// Server Side Rendering  Handler
const serverRender = (req, res, next) => {
    // 404가 떠야할 때 404 대 신 서버 사이드 렌더링 진행.
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx);
    res.send(root);
}

app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})
```

StaticRouter 컴포넌트 : 서버 사이드 렌더링 용도로 주로 사용되는 React Router에서 제공되는 라우터.

Location 값에 따라 라우팅. → req.url을 통해 요청에 따라 라우팅. (현재)

context 을 통해 렌더링한 컴포넌트에 따라 HTTP 상태 코드를 설정해 줄 용도.

`npm run build:server
npm run start:server`

### 이때 에러

CRA 업데이트에 따른 에러

solve : [https://github.com/velopert/learning-react/blob/master/_old_corrections/개정판-4쇄.md#20302-업데이트-pg548---550](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-4%EC%87%84.md#20302-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-pg548---550)

**→ exportOnlyLocals: true, 라는 옵션을 modules 안에 넣어주는 작업을 진행해주어야 함.**

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2014.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2014.png)

ToDo : CSS를 불러오도록 해야함.

- 현재는 Browser에서 JS가 실행된 상태도 아님.
- 서버에서 모드 렌더링 한 것.

    ![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2015.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2015.png)

# 정적 파일 제공하기

< src/index.server.js >

```jsx
import path from 'path';
...
const serve = express.static(path.resolve('.build'), {
    index:false  //  "/" 경로에서  'index.html' 을 숨김.
})
...
app.use(serve);  // 순서 중요.
app.use(serverRender);
```

JS, CSS 를 불러오도록 html에 코드를 삽입해 주어야 함.

하지만, 이 파일 이름이 매번 빌드 할 때마다 바뀌므로,
빌드 후에 만들어지는 asset-manifest.json 파일을 참고하여 불러오도록 작성.

`npm run build` →

build/asset-manifest.json 를 이용해서 html을 삽입해주어야 한다.

```jsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';

// build/asset-manifest.json 파일 경로 조회.
const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

//chunk.js로 끝나는 키를 찾아 / 스크립트 태그로 변환 후 / 합쳐주어야함.
const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key)) 
    .map(key => `<script src="${manifest.files[key]}"></script>`)
    .join('');

function createPage(root) {
    return
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <title>React App</title>
            <link href="${manifest['main.css']}" rel="stylesheet" />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
            ${root}
            </div>
            <script src="${manifest['runtime~main.js']}"></script>
            ${chunks}
            <script src="${manifest['main.js']}"></script>
        </body>
        </html>
        `;
}

const app = express();

// Server Side Rendering  Handler
const serverRender = (req, res, next) => {
    // 404가 떠야할 때 404 대 신 서버 사이드 렌더링 진행.
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx);
    res.send(createPage(root));
}

const serve = express.static(path.resolve('.build'), {
    index:false  //  "/" 경로에서  'index.html' 을 숨김.
})

app.use(serve);  // 순서 중요.
app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})

// const html = ReactDOMServer.renderToString(
//     <div>Hello Server Side Rendering!</div>
// )

// console.log(html);
```

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2016.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2016.png)

![SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2017.png](SSR%20Practice%20268898fb1a1f4d3b83fa9bdb3bc57a73/Untitled%2017.png)

# 데이터 로딩

데이터 로딩 ==  API 요청.

일반적 : API 요청에 의해 응답 받은 데이터를 state or store 에 넣으면 자동으로 리렌더링 된다.

SSR : 문자열 형태로 렌더링이 되고 있는데, state or store 가 바뀐다고 해서 렌더링 되지 않는다.
**→ renderToString 함수를 한 번 더 호출 해야함.**

언제? server에서는 LifeCycle API도 사용할 수 없음.

### Solution

- redux-thunk
- redux-saga

## redux-thunk 와 redux-saga의 차이는?

## redux-thunk

액션 타입, 액션 생성 함수, 리듀서 코드를 한 파일에 넣어서 관리하는 Ducks 패턴 사용.