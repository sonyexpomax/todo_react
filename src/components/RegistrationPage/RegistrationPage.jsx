import './style.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import RegistrationPageButton from '../RegistrationPageButton';
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid/index";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            passwordConfirm: '',
            submitted: false,
            validEmail: false,
            validPassword: false,
            validConfirmPassword: false,
            isChangingLogin: false,
            isChangingPassword: false,
            isChangingConfirmPassword: false
        };
    }

    validateEmail = (email) => {
        let pattr = /^[a-z\-0-9_.]+@[a-z\-0-9_]+\.[a-z]{2,5}$/i;
        if (email.match(pattr)) {
            return true;
        }
        return false;
    };

    validatePassword = (password) => {
        let pattr = /^[A-Za-z\-0-9_.@]{6,20}$/i;
        if (password.match(pattr)) {
            return true;
        }
        return false;
    };

    validatePasswordConfirm = (confirmPassword) => {
        return (this.state.password === confirmPassword);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {email, password, passwordConfirm} = this.state;
        if (
            email &&
            password &&
            this.validateEmail(email) &&
            this.validatePassword(password) &&
            (password === passwordConfirm)
        ) {
            this.props.register(email, password, passwordConfirm);
        }
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            isChangingPassword: true,
            validPassword: this.validatePassword(e.target.value)
        });
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
            isChangingLogin: true,
            validEmail: this.validateEmail(e.target.value)
        });
    };

    onPasswordConfirmChange = (e) => {
        this.setState({
            isChangingConfirmPassword: true,
            passwordConfirm: e.target.value,
            validConfirmPassword: this.validatePasswordConfirm(e.target.value)
        });
    };

    render() {
        let info = '';

        if (this.state.isChangingLogin && !this.state.validEmail) {
            info = 'Invalid email';
        }
        else if (this.state.isChangingPassword && !this.state.validPassword) {
            info = 'Password does not meet minimal requirements (should be 6 characters)';
        }
        else if (this.state.isChangingConfirmPassword && !this.state.validConfirmPassword) {
            info = 'Password and Confirm password fields does not match';
        }

        return (
            <div className='td-registration-page-wrap'>
                <h2>Sign Up</h2>
                <div className='td-registration-page-info'>
                    {info && (
                        <div>
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                size='xs'
                                className='td-login-page-info-icon'
                                onClick={this.onEdit}
                            />
                            {info}
                        </div>
                    )}
                </div>
                <form>
                    <div className='td-registration-page-input'>
                        <input
                            id='email'
                            type="text"
                            name="login"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            placeholder='Email'
                            className={(this.state.isChangingLogin && !this.state.validEmail) ? 'td-registration-page-input-info' : ''}
                        />
                    </div>
                    <div className='td-registration-page-input'>
                        <input
                            id='password'
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            placeholder='Password'
                            className={(this.state.isChangingPassword && !this.state.validPassword) ? 'td-registration-page-input-info' : ''}
                        />
                    </div>
                    <div className='td-registration-page-input'>
                        <input
                            id='confirm-password'
                            type='password'
                            name='confirm_password'
                            placeholder='Confirm Password'
                            value={this.state.passwordConfirm}
                            onChange={this.onPasswordConfirmChange}
                            className={(this.state.isChangingPassword && !this.state.validConfirmPassword) ? 'td-registration-page-input-info' : ''}
                        />
                    </div>
                    <RegistrationPageButton isRequset={this.props.isRequest} signIn={this.onSubmit}/>
                </form>

                <div className='td-registration-page-login-link'>
                    Already a member?
                    <Link to='/login' className='td-registration-page-link'>Login</Link>
                </div>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    register: PropTypes.func,
    isRequest: PropTypes.bool
};

export default withRouter(RegistrationPage);
