import './style.scss';
import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import LoginPageButton from '../LoginPageButton';
import PropTypes from 'prop-types';

class LoginPage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            submitted: false,
            validLogin: false,
            validPassword: false,
            isChangingLogin: false,
            isChangingPassword: false
        };
    }

    validateLogin = (val) => {
        let pattr = /^[a-z\-0-9_.]+@[a-z\-0-9_]+\.[a-z]{2,5}$/i;
        return val.match(pattr);
    };

    validatePassword = (val) => {
        return val.length > 8;
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { login, password } = this.state;
        if (
            login
            && password
            && this.validateLogin(login)
            && this.validatePassword(password)
        ) {
            this.props.signIn(login, password);
        }
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            isChangingPassword: true,
            validPassword: this.validatePassword(e.target.value)
        });
    };

    onLoginChange = (e) => {
        this.setState({
            login: e.target.value,
            isChangingLogin: true,
            validLogin: this.validateLogin(e.target.value)
        });
    };

    render () {
        let validateColor = (this.state.validLogin === true) ? 'green' : 'red';
        console.log(!(this.state.isChangingLogin || this.state.isChangingPassword));

        let info;
        if(this.state.isChangingLogin || this.state.isChangingPassword){
           info = (this.validateLogin(this.state.login) && this.validatePassword(this.state.password))
                ? ''
                : 'Incorrect login or(and) password';
        } else {
            info = '';
        }


        // switch ()
        return (
            <div className='td-login-page-wrap'>
                <h2>Sign In</h2>
                <div className='td-login-page-info'>
                    {info}
                </div>
                <form>
                    <div className='td-login-page-input'>
                        <input
                            id='email'
                            type="text"
                            name="login"
                            value={this.state.login}
                            onChange={this.onLoginChange}
                            placeholder='Email'
                            className= { info === '' ? '' : 'td-login-page-input-info'}
                        />
                    </div>
                    <div className='td-login-page-input'>
                        <input
                            id='password'
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            placeholder='Password'
                            className= { info === '' ? '' : 'td-login-page-input-info'}
                        />
                    </div>
                        {/*<button id = 'b2' onClick={this.onSubmit}>2323</button>*/}
                        <LoginPageButton isRequset={this.props.isRequest} signIn={this.onSubmit}/>
                </form>
                <div className='td-login-page-registration-link'>
                    Don`t you have an account?
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
