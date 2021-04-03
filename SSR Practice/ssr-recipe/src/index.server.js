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

// const html = ReactDOMServer.renderToString(
//     <div>Hello Server Side Rendering!</div>
// )

// console.log(html);