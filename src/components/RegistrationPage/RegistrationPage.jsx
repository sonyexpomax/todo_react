import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegistrationPageButton from '../RegistrationPageButton';
import './style.css';

class RegistrationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            email:'',
            password: '',
            passwordConfirm: '',
            submitted: false
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirm } = this.state;
        if (email && password) {
            this.props.register(email, password, passwordConfirm);
        }
    };

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    onPasswordConfirmChange = (e) => {
        this.setState({passwordConfirm: e.target.value});
    };


    render() {
        return (
            <div className={'register'}>
                <h2>Registration</h2>
                <form onSubmit={this.onSubmit}>
                    <p className={'register-label'}><label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange}/>
                    </p>
                    <p className={'register-label'}><label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </p>
                    <p className={'register-label'}><label>Confirm password:</label>
                        <input type="confirm_password" name="confirm_password" value={this.state.passwordConfirm} onChange={this.onPasswordConfirmChange}/>
                    </p>
                    <p>
                        <RegistrationPageButton isRequset={this.props.isRequest} signIn={this.props.signIn}/>
                    </p>
                </form>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    register: PropTypes.function,
};

export default RegistrationPage;