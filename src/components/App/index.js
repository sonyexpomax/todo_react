import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import TodoList from '../TodoList';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';
// import RegisterPage from '../RegisterPage';
import Todo from '../Todo';
import './style.css';

class App extends Component {

    static propTypes = {
      //
    };

    render(){
        // let firstPage = this.props.userInfo.token ?  <TodoList /> : <LoginForm />;
        return (
            <div>
                <LoginPage />
                <RegistrationPage />
                {/*firstPage*/}
                {/*<Router>*/}
                    {/*<div>*/}
                        {/*<Route exact path='/' component={Todo} />*/}
                        {/*<Route path="/login" component={LoginPage} />*/}
                        {/*/!*<Route path="/register" component={RegisterPage} />*!/*/}
                    {/*</div>*/}
                {/*</Router>*/}
            </div>
        );
    }
}


export default connect()(App)