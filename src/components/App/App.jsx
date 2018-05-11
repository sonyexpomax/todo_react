import './style.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import LoginPage from '../LoginPage';
import LogoutButton from '../LogoutButton';
import PropTypes from 'prop-types';
import RegistrationPage from '../RegistrationPage';
import RouterCreate from '../RouterCreate';
import {Switch} from 'react-router-dom';
import TodoLists from '../TodoLists';
import './style.scss';

class App extends Component {
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
                        <RouterCreate path="/lists" component={TodoLists} onEnter={this.props.loggedIn} />
                        <Route path="/login" component={LoginPage} />
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
