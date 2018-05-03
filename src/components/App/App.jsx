import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Switch} from 'react-router';
import PropTypes from 'prop-types';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
import TodoLists from '../TodoLists';

import './style.css';

class App extends Component {

    requireAuth = (nextState, replace, cb) => {
        if (!this.props.loggedIn) {
            replace({
                pathname: '/sign_in'
            });
        }
        // cb();
    };

    requireAlreadyAuth = (nextState, replace, cb) => {
        if (this.props.loggedIn) {
            replace({
                pathname: '/lists'
            });
        }
        cb();
    };

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/lists"  component={TodoLists} onEnter={this.requireAuth} />
                    <Route path="/login" component={LoginPage} onEnter={this.requireAlreadyAuth}/>
                    <Route path="/registration" component={RegistrationPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool
};

export default App