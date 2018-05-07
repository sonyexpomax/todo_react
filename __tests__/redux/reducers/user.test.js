import {
    loggingUser,
    logInUser,
    logOutUser,
    loggingOutUser
} from '../../../__mocks__/data/userData';
import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_REQUEST
} from '../../../src/redux/constants/authentificate';
import {default as userReducer} from '../../../src/redux/reducers/user';


describe('REDUCER --- Test Reducers for user', () => {
    it('+++ reducer for LOGIN_REQUEST', () => {
        expect(userReducer(logOutUser, {type: LOGIN_REQUEST})).toEqual(loggingUser);
    });
    it('+++ reducer for LOGIN_SUCCESS', () => {
        const user = {
            email: 'qqqqq@qew.com',
            uid: 'qqqqq@qew.com'
        };
        expect(userReducer(logOutUser, {type: LOGIN_SUCCESS, user})).toEqual(logInUser);
    });

    it('+++ reducer for LOGOUT_REQUEST', () => {
        expect(userReducer(logInUser, {type: LOGOUT_REQUEST})).toEqual(loggingOutUser);
    });
    it('+++ reducer for LOGOUT_SUCCESS', () => {
        expect(userReducer(logInUser, {type: LOGOUT_SUCCESS})).toEqual(logOutUser);
    });
    it('+++ reducer for non-existent action type', () => {
        expect(userReducer(logOutUser, { type: 'SOME_ACTION_TYPE' })).toEqual(logOutUser);
    });
    it('+++ reducer for default initial state', () => {
        expect(userReducer(undefined, { type: 'SOME_ACTION_TYPE' })).toEqual(logOutUser);
    });
});
