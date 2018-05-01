import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginPageButton from '../LoginPageButton';
import { loginAction } from '../../redux/actions/authentificate';
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
        const { dispatch } = this.props;
        if (login && password) {
            dispatch(loginAction(login, password));
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
            </div>
        );
    }
}

export default LoginPage;