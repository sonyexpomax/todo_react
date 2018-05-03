import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST
} from '../constants/authentificate';
// import { browserHistory } from 'react-router';

import {logoutUser, loginUser, registerUser} from '../api/user';
import { startRequest, stopRequest } from  '../ui/button';

const registrationRequest = (user) => { return { type: REGISTER_REQUEST, user } };
const registrationSuccess = (user) => { return { type: REGISTER_SUCCESS, user } };
const registrationFailure = (error) => { return { type: REGISTER_FAILURE, error } };

const loginRequest = (user) => { return { type: LOGIN_REQUEST, user } };
const loginSuccess = (user) => { return { type: LOGIN_SUCCESS, user } };

const logoutRequest = (user) => { return { type: LOGOUT_REQUEST, user } };
const logoutSuccess = (user) => { return { type: LOGOUT_SUCCESS, user } };

function loginAction(email, password) {
    return dispatch => {
        dispatch(startRequest());
        dispatch(loginRequest({ email }));
        loginUser(email, password)
            .then(
                user => {
                    dispatch(loginSuccess(user));

                    // window.location.assign('/lists');
                    // browserHistory.push('/lists');
                    // console.info(user);
                },
                error => {
                    // dispatch(loginFailure(error));
                    // dispatch(stopRequest());
                    console.error(error);
                }
            );
    };
}

function registerAction(email, password, password_confirmation ) {
    return dispatch => {
        dispatch(startRequest());
        dispatch(registrationRequest(email));
        registerUser(email, password, password_confirmation)
            .then(
                response => {
                    dispatch(registrationSuccess());
                    dispatch(stopRequest());
                },
                error => {
                    console.warn('error', error);
                    dispatch(registrationFailure(error));
                }
            );
    };
}

function logoutAction() {
    return dispatch => {
        dispatch(logoutRequest());
        logoutUser()
            .then(
                response => {
                    dispatch(logoutSuccess());
                },
                error => {
                    console.error(error);
                }
            );
    };
}

export {loginAction, registerAction, logoutAction};