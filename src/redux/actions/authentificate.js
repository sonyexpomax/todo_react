import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST
} from '../constants/authentificate';

import {logoutUser, loginUser, registerUser} from '../api/user';

const registrationRequest = (user) => { return { type: REGISTER_REQUEST, user } };
const registrationSuccess = (user) => { return { type: REGISTER_SUCCESS, user } };

const loginRequest = (user) => { return { type: LOGIN_REQUEST, user } };
const loginSuccess = (user) => { return { type: LOGIN_SUCCESS, user } };

const logoutRequest = (user) => { return { type: LOGOUT_REQUEST, user } };
const logoutSuccess = (user) => { return { type: LOGOUT_SUCCESS, user } };

function loginAction (email, password) {
    return dispatch => {
        dispatch(loginRequest({ email }));
        return loginUser(email, password)
            .then(
                user => {
                    dispatch(loginSuccess(user));
                },
                error => {

                    console.error('error');
                }
            );
    };
}

function registerAction (email, password, passwordConfirmation) {
    return dispatch => {
        dispatch(registrationRequest(email));
        return registerUser(email, password, passwordConfirmation)
            .then(
                () => {
                    dispatch(registrationSuccess());
                },
                error => {
                    console.warn('error');
                }
            );
    };
}

function logoutAction () {
    return dispatch => {
        dispatch(logoutRequest());
        return logoutUser()
            .then(
                () => {
                    dispatch(logoutSuccess());
                },
                error => {
                    console.error('error');
                }
            );
    };
}

export {loginAction, registerAction, logoutAction};