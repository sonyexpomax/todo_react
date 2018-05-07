import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from '../constants/authentificate';

let initialState = {
    loggedIn: false,
    loggingIn: false,
    loggingOut: false,
    user: {}
};

export default function lists (state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...state,
            loggingIn: true
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: true,
            loggingIn: false,
            user: action.user
        };
    case LOGOUT_REQUEST:
        return {...state, loggingOut: true};
    case LOGOUT_SUCCESS:
        return {
            ...state,
            loggedIn: false,
            user: {},
            loggingOut: false
        };
    default:
        return state;
    }
}
