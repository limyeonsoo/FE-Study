# 깡으로 React 만들기

# 프로젝트 폴더 생성

**$ mkdir portfolio
$ cd portfolio
npm init -y**

npm init으로 프로젝트 폴더 생성.

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled.png)

# React 설치.

**$ npm install react react-dom**

- react
- react-dom

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%201.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%201.png)

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%202.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%202.png)

# Babel 설치.

**$ npm install —save-dev @bable/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties**

- @babel/core
- @babel/preset-env
- @babel/preset-react
- @babel/plugin-proposal-class-properties

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%203.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%203.png)

# Webpack 설치.

**$ npm install —save-dev webpack webpack-cli webpack-dev-server**

- webpack
- webpack-cli
- webpack-dev-server

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%204.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%204.png)

# loader 설치.

**$ npm install —save-dev babel-loader style-loader css-loader**

- babel-loader
- style-loader
- css-loader

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%205.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%205.png)

# 기본 폴더/파일 생성.

- public/  src/  src/components/  src/css/
**$ mkdir public src src/components src/css**
- public/index.html  src/main.js  src/components/App.js  src/css/styles.css
**$ touch public/index.html src/index.js src/App.js src/css/styles.css**
- webpack.config.js
**$ touch webpack.config.js**
- .gitignore
**$ touch .gitignore**
- .babelrc
**$ touch .babelrc**

![%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%206.png](%E1%84%81%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20React%20%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5%20d42bb78eb9b140e1a559fd385da6cd23/Untitled%206.png)

# webpack.config.js 설정

```json
var path = require('path');

module.exports = {
    entry : {
        main: ['./src/main.js']
    },
    output : {
        path : path.resolve(__dirname , './build'),
        filename: '[name].js'
    },
    module : {
        rules : [{
            test : /\.js$/, 
            include: path.resolve(__dirname , './src'),
            loader: 'babel-loader'
        },{
            test : /\.css$/, 
            include: path.resolve(__dirname , './src/css'),
            loader:['style-loader', 'css-loader']
        }]
    },
    plugins : [],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
    },
    resolve :{
        alias : {
            '@':path.resolve(__dirname,'src'),
        }
    },
};
```

깡으로 다시 만든 이유 :  create-react-app은  webpack 4.42.0을 쓰라고 하고, 해당 버전에는 resolve alias issue가 있어 @를 쓸 수 없었다...

# public/index.html

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>firstProject</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="/">
    </head>
    <body>
        <div id="app"></div>

        <script src="main.js"></script>
    </body>
</html>
```

# public/index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)
```

# public/App.js

```jsx
import React from 'react';
import '../css/styles.css'

export default class App extends React.Component{
    render(){
        return(
            <div>Hello World</div>
        )
    }
}
```

# .babelrc

```jsx
{
    "presets": ["@babel/env", "@babel/react"],
    "plugins": [
        ["@babel/plugin-proposal-class-properties"]
    ]
}
```

# .gitignore

```jsx
node_modules
.DS_Store
dist
```

# Error

## 1. 'MODE_ENV'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

MODE_ENV는 webpack메서드에서 config인자를 주어 로깅하는 것.

## 2. 'webpack-cli/bin/config-yargs를 찾을 수 없다.

- 원인
webpack, webpack-cli, webpack-dev-server의 버전이 맞지 않아서.
- 해결

    현재 webpack webpack-cli를 삭제 후, webpack-dev-server에 맞게 설치.
    **$ npm uninstall -dev webpack webpack-cli
    $ npm install —save-dev webpack webpack-cli**

    또는 
    **$ npm install —save-dev webpack-cli@버전**  으로 버전 맞춰주기

## 3. Webpack 'Cannot GET /'

- /src/index.html
- /public/index.html
- /src/index.js

ref) [https://romeoh.tistory.com/entry/Reactjs-create-react-app-없이-Reactjs-프로젝트-생성하기](https://romeoh.tistory.com/entry/Reactjs-create-react-app-%EC%97%86%EC%9D%B4-Reactjs-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)