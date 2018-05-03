import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Switch, Redirect} from 'react-router';
import PropTypes from 'prop-types'
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
import TodoLists from '../TodoLists';

import './style.css';

class App extends Component {

    constructor(props){
        super(props);
    }

    static propTypes = {
        //
    };

    requireAuth = (nextState, replace, cb) => {
        console.log(this.props);
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
        console.log('loggedIn', this.props.loggedIn);

        // let firstPage = this.props.userInfo.token ?  <TodoList /> : <LoginForm />;

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


export default App