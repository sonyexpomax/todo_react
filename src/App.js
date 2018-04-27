import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Todo from "./components/Todo/index";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(reducer);

const App = () => (
    <Provider store = {store} >
        <Todo/>
    </Provider>
);

export default App;