import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);