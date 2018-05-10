import './style.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import LoginPage from '../LoginPage';
import LogoutButton from '../LogoutButton';
import PropTypes from 'prop-types';
import RegistrationPage from '../RegistrationPage';
import {Switch} from 'react-router-dom';
import TodoLists from '../TodoLists';
import './style.scss';

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
            <BrowserRouter>
                <div>
                    <h1 className='td-app-head'>
                        Sample ToDo List
                            {
                                this.props.loggedIn ? (
                                    <Link to='/login'>
                                        <LogoutButton />
                                    </Link>
                            )
                                : ''
                            }
                    </h1>
                    <div className='td-app-main'>
                    </div>
                    <Switch>
                        <Route path="/lists" component={TodoLists} onEnter={this.requireAuth} />
                        <Route path="/login" component={LoginPage} onEnter={this.requireAlreadyAuth}/>
                        <Route path="/registration" component={RegistrationPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool
};

export default App;
