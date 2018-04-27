import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import loginUser from '../../redux/actions/authentificate';

class LoginForm extends Component {
    static propTypes = {
      //
    };

    constructor(props) {
        super(props);

        // this.props.dispatch(userActions.logout());

        this.state = {
            login: '',
            password: '',
            submitted: false
        };

    }

    onSubmit = () => {
        event.preventDefault();
       // console.log(`${this.state.login}, welcome!`);
        const { login, password } = this.state;
        //dispatch
        if (login && password) {
            dispatch(loginUser(login, password));
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
            <form onSubmit={this.onSubmit}>
                <p><label> Логин:
                    <input type="text" name="login" value={this.state.login} onChange={this.onLoginChange}/></label></p>
                <p><label> Пароль:
                    <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/></label></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginForm)