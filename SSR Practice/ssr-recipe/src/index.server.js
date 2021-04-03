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
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <title>React App</title>
            <link href="${manifest.files['main.css']}" rel="stylesheet" />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
                ${root}
            </div>
            <script src="${manifest.files['runtime-main.js']}"></script>
            ${chunks}
            <script src="${manifest.files['main.js']}"></script>
        </body>
        </html>
        `;
}

const app = express();

// Server Side Rendering  Handler
const serverRender = async(req, res, next) => {
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

const serve = express.static(path.resolve('./build'), {
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