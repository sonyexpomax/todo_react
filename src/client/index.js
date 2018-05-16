import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import history from '../history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById( "app" )
);
