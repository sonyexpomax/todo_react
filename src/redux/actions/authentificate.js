import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/authentificate';

import {logoutUser, loginUser, registerUser} from '../api/user';
import { startRequest, stopRequest } from  '../ui/button';

const registrationRequest = (user) => { return { type: REGISTER_REQUEST, user } };
const registrationSuccess = (user) => { return { type: REGISTER_SUCCESS, user } };
const registrationFailure = (error) => { return { type: REGISTER_FAILURE, error } };

const loginRequest = (user) => { return { type: LOGIN_REQUEST, user } };
const loginSuccess = (user) => { return { type: LOGIN_SUCCESS, user } };
const loginFailure = (error) => { return { type: LOGIN_FAILURE, error } };

function loginAction(email, password) {
    return dispatch => {
        dispatch(startRequest());
        dispatch(loginRequest({ email }));
        loginUser(email, password)
            .then(
                user => {
                    dispatch(loginSuccess(user));
                    dispatch(stopRequest());
                    console.info(user);
                },
                error => {
                    dispatch(loginFailure(error));
                    dispatch(stopRequest());
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
                user => {
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
    logoutUser();
    return { type: LOGOUT };
}


export {loginAction, registerAction, logoutAction};