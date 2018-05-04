import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from '../constants/authentificate';

let initialState = {
    loggedIn: false,
    loggingIn: false,
    user: {}
};

export default function lists (state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {loggingIn: true, user: action.user};
    case LOGIN_SUCCESS:
        return {
            loggedIn: true,
            loggingIn: false,
            user: action.user
        };
    case LOGOUT_REQUEST:
        return {...state, loggingOut: true};
    case LOGOUT_SUCCESS:
        return {
            loggedIn: false,
            loggingIn: false,
            user: {}
        };
    default:
        return state;
    }
}
