import express from "express";
import {StaticRouter} from 'react-router-dom';
import {renderToString} from "react-dom/server";
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../redux/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();

app.use('/public', express.static('./public'));
app.get('/*', (req, res) => {

    const context = {};
    const jsx = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        </Provider>);

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const reactDom = renderToString(jsx);
    res.status(200).send(htmlTemplate(reactDom));

 });

app.listen(3006);

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href='http://localhost:8052/public/style.css'>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="http://localhost:8052/public/bundle.js"></script>
        </body>
        </html>
    `;
}

