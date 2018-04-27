import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegistrationPageButton from '../RegistrationPageButton';
// import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import { registerAction } from '../../redux/actions/authentificate';
import './style.css';

const propTypes = {
    //
};

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
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(registerAction(email, password, passwordConfirm));
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
            <div className={'login'}>
                <h2>Registration</h2>
                <form onSubmit={this.onSubmit}>

                    <p className={'login-label'}><label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange}/>
                    </p>
                    <p className={'login-label'}><label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </p>
                    <p className={'login-label'}><label>Confirm password:</label>
                        <input type="confirm_password" name="confirm_password" value={this.state.passwordConfirm} onChange={this.onPasswordConfirmChange}/>
                    </p>
                    <button type={'submit'}>ok</button>
                    <RegistrationPageButton isRequset={this.props.isRequest} signIn={this.props.signIn}/>
                </form>
            </div>
        );
    }
}

RegistrationPage.propTypes = propTypes;

export default RegistrationPage;