import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import {logoutAction,loginAction, registerAction} from '../../../src/redux/actions/authentificate';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import '../../mock-localstorage';
import {
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../../../src/redux/constants/authentificate";

const mockStore = configureMockStore([thunk]);

const initialState = {
    user: {user: {'access-token': 'ss', 'client': 'ss', 'uid': 'ss'}}
};

describe('async actions', () => {
    it('creates LOGIN_SUCCESS when signing has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPost('http://localhost:3000/auth/sign_in').reply(
            200,
            {},
            {'access-token': 'ss', 'client': 'ss', 'uid': 'ss'}
        );
        const expectedActions = [
            {
                user: {email: 'email'},
                type: LOGIN_REQUEST
            },
            {
                user: {
                    'access-token': 'ss',
                    'client': 'ss',
                    'uid': 'ss'
                },
                type: LOGIN_SUCCESS
            }
        ];

        const store = mockStore(initialState);
        return store.dispatch(loginAction('email', 'passwd')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it(' LOGIN has been failed', () => {
        let mock = new MockAdapter(axios);
        mock.onGet('http://localhost:3000/auth/sign_in').networkError();
        const expectedActions = [{user: {email: 'email'}, type: LOGIN_REQUEST}];
        const store = mockStore(initialState);
        return store.dispatch(loginAction('email', 'passwd')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates LOGOUT_SUCCESS when leaving has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onDelete('http://localhost:3000/auth/sign_out').reply(200, {});
        const expectedActions = [
            {
                user: undefined,
                type: LOGOUT_REQUEST
            },
            {
                user: undefined,
                type: LOGOUT_SUCCESS
            }
        ];

        const store = mockStore(initialState);
        return store.dispatch(logoutAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('  LOGOUT has been failed', () => {
        let mock = new MockAdapter(axios);
        mock.onDelete('http://localhost:3000/auth/sign_out').networkError();
        const expectedActions = [{user: undefined, type: LOGOUT_REQUEST},{user: undefined, type: LOGOUT_SUCCESS}];
        const store = mockStore(initialState);
        return store.dispatch(logoutAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates REGISTER_SUCCESS when leaving has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onPost('http://localhost:3000/auth/').reply(200, {});
        const expectedActions = [
            {
                user: 'email',
                type: REGISTER_REQUEST
            },
            {
                user: undefined,
                type: REGISTER_SUCCESS
            }
        ];

        const store = mockStore(initialState);
        return store.dispatch(registerAction('email', 'password', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('  REGISTER has been failed', () => {
        let mock = new MockAdapter(axios);
        mock.onPost('http://localhost:3000/auth/').networkError();
        const expectedActions = [{user: 'email', type: REGISTER_REQUEST},{user: undefined, type: REGISTER_SUCCESS}];
        const store = mockStore(initialState);
        return store.dispatch(registerAction('email', 'password', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});

