import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Switch} from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
import TodoLists from '../TodoLists';
import NewTask from '../NewTask';

import './style.css';

class App extends Component {

    static propTypes = {
      //
    };

    render(){
        // let firstPage = this.props.userInfo.token ?  <TodoList /> : <LoginForm />;
        return (
            <BrowserRouter >
                <Switch>
                    <Route path='/lists' component={TodoLists} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/registration" component={RegistrationPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default connect()(App)