import './style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginPageButton from '../LoginPageButton';
import PropTypes from 'prop-types';

class LoginPage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            submitted: false,
            valid: false
        };
    }

    validate = (val) => {
        let pattr = /^[a-z\-0-9_.]+@[a-z\-0-9_]+\.[a-z]{2,5}$/i;
        return val.match(pattr);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { login, password } = this.state;
        if (login && password && this.validate(login)) {
            this.props.signIn(login, password);
        }
    };

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    onLoginChange = (e) => {
        this.setState({
            login: e.target.value,
            valid: this.validate(e.target.value)
        });
    };

    render () {
        let validateColor = (this.state.valid === true) ? 'green' : 'red';
        return (
            <div className='td-login-page-wrap'>
                <h2>Login</h2>
                <form>
                    <p className='td-login-page-label'><label>Email:</label>
                        <input
                            type="text"
                            name="login"
                            value={this.state.login}
                            onChange={this.onLoginChange}
                            style={{borderColor: validateColor}} />
                    </p>
                    <p className='td-login-page-label'><label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </p>
                    <p>
                        <LoginPageButton isRequset={this.props.isRequest} signIn={this.onSubmit}/>
                    </p>
                </form>
                <div className='td-login-page-registration-link'>
                    <Link to='/registration' className='td-login-page-link'>Registration</Link>
                    <Link to='/lists' className='td-login-page-link'>Lists</Link>
                </div>

            </div>
        );
    }
}

LoginPage.propTypes = {
    signIn: PropTypes.func,
    isRequest: PropTypes.bool
};

export default LoginPage;
