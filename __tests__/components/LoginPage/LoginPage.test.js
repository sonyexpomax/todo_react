import configureStore from 'redux-mock-store';
import LoginPageContainer from '../../../src/components/LoginPage';
import {mountWithStore} from '../../shallowWrapper';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const props = {
    signIn: jest.fn(() => Promise.resolve('3')),
    isRequest: false,

};
const initialState = {
    user:{loggedIn:true},
    ui: {
        button: false
    }
};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<BrowserRouter><LoginPageContainer {...props}/></BrowserRouter>, store);
});

describe('Component LoginPage', () => {
    it('should render LoginPage', () => {
        expect(enzymeWrapper.find('h2').text()).toBe('Sign In');
    });
    it('should not call sign in with empty password and login', () => {
        const loginButton = enzymeWrapper.find('LoginPageButton');
        loginButton.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should call sign in', () => {
        const loginButton = enzymeWrapper.find('LoginPageButton');
        console.log(loginButton);
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'wwwwwwwww'}});
        loginButton.simulate('click', { preventDefault: () => {} });
        enzymeWrapper.update();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
