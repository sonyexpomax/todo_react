import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import RegistrationPage from "../components/RegistrationPage";
import TodoLists from "../components/TodoLists";
import App from "../components/App/App";
import { Route } from 'react-router';
import React from 'react';

export default function routes () {
    return (
        <Route component={App} >
            <Route path="/lists" component={TodoLists}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/registration" component={RegistrationPage}/>
            <Route path="/" component={HomePage}/>
        </Route>
    );
}