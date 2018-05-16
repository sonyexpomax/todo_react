import './style.scss';
import { Route } from 'react-router-dom';
import React, {Component} from 'react';
import LoginPage from '../LoginPage';
import PropTypes from 'prop-types';
import RegistrationPage from '../RegistrationPage';
import HomePage from '../HomePage';
import RouterCreate from '../RouterCreate';
import {Switch} from 'react-router-dom';
import TodoLists from '../TodoLists';
import Head from '../Head';

class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Switch>
                    {/*<RouterCreate path="/lists" component={TodoLists} onEnter={this.props.loggedIn}/>*/}
                    <Route path="/lists" component={TodoLists}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool
};

export default App;
