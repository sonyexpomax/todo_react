import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './redux/reducers';
import Todo from "./components/Todo/index";

const store = createStore(reducer);

const App = () => (
    <Provider store = {store} >
        <Todo/>
    </Provider>
);

export default App;