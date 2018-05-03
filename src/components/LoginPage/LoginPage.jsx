import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import LoginPageButton from '../LoginPageButton';
import './style.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            submitted: false
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { login, password } = this.state;
        if (login && password) {
            this.props.signIn(login, password);
        }
    };

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    onLoginChange = (e) => {
        this.setState({login: e.target.value});
    };

    render() {
        return (
            <div className={'login'}>
                <h2>Login</h2>
                <Link to='/lists'>Lists</Link>
                <form onSubmit={this.onSubmit}>
                    <p className={'login-label'}><label>Login:</label>
                        <input type="text" name="login" value={this.state.login} onChange={this.onLoginChange}/>
                    </p>
                    <p className={'login-label'}><label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </p>
                    <p>
                        <LoginPageButton isRequset={this.props.isRequest} signIn={this.props.signIn}/>
                    </p>
                </form>
                <div className={'registration-link'}>
                    <Link to={`/registration`} >Registration</Link>
                </div>

            </div>
        );
    }
}

LoginPage.PropTypes = {
    signIn: PropTypes.function,
    isRequest: PropTypes.boolean
};

export default LoginPage;