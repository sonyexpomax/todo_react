import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegistrationPageButton from '../RegistrationPageButton';
import {Link} from 'react-router-dom';
import './style.css';

class RegistrationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email:'',
            password: '',
            passwordConfirm: '',
            submitted: false,
            validEmail: false,
            validPassword: false,
            validConfirmPassword: false
        };
    }

    validateEmail = (email) => {
        let pattr =  /^[a-z\-0-9_.]+@[a-z\-0-9_]+\.[a-z]{2,5}$/i;
        if(email.match(pattr)){
            return true;
        }
        return false;
    };

    validatePassword = (password) => {
        let pattr =  /^[A-Za-z\-0-9_.@]{6,20}$/i;
        if(password.match(pattr)){
            return true;
        }
        return false;
    };

    validatePasswordConfirm = () => {
        return (this.state.password === this.state.passwordConfirm)
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirm } = this.state;
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
            validPassword: this.validatePassword(e.target.value)
        });
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
            validEmail: this.validateEmail(e.target.value)
        });
    };

    onPasswordConfirmChange = (e) => {
        this.setState({
            passwordConfirm: e.target.value,
            validConfirmPassword: this.validatePasswordConfirm()
        });
    };

    render() {
        let validatePasswordColor = (this.state.validPassword === true) ? "green" : "red";
        let validatePasswordConfirmColor = (this.state.validConfirmPassword === true) ? "green" : "red";
        let validateEmailColor = (this.state.validEmail === true) ? "green" : "red";
        return (
            <div className="td-registration-page-wrap">
                <h2>Registration</h2>
                <form onSubmit={this.onSubmit}>
                    <p><label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange} style={{borderColor:validateEmailColor}}/>
                    </p>
                    <p><label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange} style={{borderColor:validatePasswordColor}}/>
                    </p>
                    <p><label>Confirm password:</label>
                        <input type="password" name="confirm_password" value={this.state.passwordConfirm} onChange={this.onPasswordConfirmChange}  style={{borderColor:validatePasswordConfirmColor}}/>
                    </p>
                    <p>
                        <Link to="/login">
                            <RegistrationPageButton isRequset={this.props.isRequest} signIn={this.props.signIn}/>
                        </Link>
                    </p>
                </form>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    register: PropTypes.func,
    isRequest: PropTypes.bool
};

export default RegistrationPage;