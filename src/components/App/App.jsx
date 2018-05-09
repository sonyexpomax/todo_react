import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import LoginPage from '../LoginPage';
import PropTypes from 'prop-types';
import RegistrationPage from '../RegistrationPage';
import {Switch} from 'react-router-dom';
import TodoLists from '../TodoLists';
import './style.css';

class App extends Component {
    requireAuth = (nextState, replace) => {
        if (!this.props.loggedIn) {
            replace({
                pathname: '/sign_in'
            });
        }
    };

    requireAlreadyAuth = (nextState, replace, cb) => {
        if (this.props.loggedIn) {
            replace({
                pathname: '/lists'
            });
        }
        cb();
    };

    render () {
        return (
            <div>
                <h1 className='td-app-head'>Sample ToDo List</h1>
                <div className='td-app-main'>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/lists" component={TodoLists} onEnter={this.requireAuth} />
                            <Route path="/login" component={LoginPage} onEnter={this.requireAlreadyAuth}/>
                            <Route path="/registration" component={RegistrationPage} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>

        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool
};

export default App;
