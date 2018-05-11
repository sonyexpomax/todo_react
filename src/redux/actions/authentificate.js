import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST
} from '../constants/authentificate';
// import { browserHistory } from 'react-router';

import {logoutUser, loginUser, registerUser} from '../api/user';

const registrationRequest = (user) => { return { type: REGISTER_REQUEST, user } };
const registrationSuccess = (user) => { return { type: REGISTER_SUCCESS, user } };

const loginRequest = (user) => { return { type: LOGIN_REQUEST, user } };
const loginSuccess = (user) => { return { type: LOGIN_SUCCESS, user } };

const logoutRequest = (user) => { return { type: LOGOUT_REQUEST, user } };
const logoutSuccess = (user) => { return { type: LOGOUT_SUCCESS, user } };

function loginAction (email, password) {
    return dispatch => {
        // dispatch(startRequest());
        dispatch(loginRequest({ email }));
        return loginUser(email, password)
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

function registerAction (email, password, passwordConfirmation) {
    return dispatch => {
        // dispatch(startRequest());
        dispatch(registrationRequest(email));
        return registerUser(email, password, passwordConfirmation)
            .then(
                () => {
                    dispatch(registrationSuccess());
                    // dispatch(stopRequest());
                },
                error => {
                    console.warn('error', error);
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
                    console.error(error);
                }
            );
    };
}

export {loginAction, registerAction, logoutAction};