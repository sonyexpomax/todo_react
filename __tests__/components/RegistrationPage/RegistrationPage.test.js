import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RegistrationPageContainer from '../../../src/components/RegistrationPage';

const props = {
    register: jest.fn(() => Promise.resolve('3')),
    isRequest: false
};
const initialState = {
    ui: {button: false}
};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<BrowserRouter><RegistrationPageContainer {...props}/></BrowserRouter>, store);

});

describe('Component RegistrationPage', () => {
    it('should render RegistrationPage', () => {
        expect(enzymeWrapper.find('h2').text()).toBe('Sign Up');
        expect(enzymeWrapper.hasClass('td-registration-page-btn-wrap'));
    });
    it('should not call sign in with empty password and login', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('validateEmail should pass', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('validateEmail not should pass', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaassss.sss'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('validatePassword and validateConfirmPassword should pass', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('validatePassword should not pass', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('validatePassword and validateConfirmPassword should pass', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('password and confirm password does not match', () => {
        const button = enzymeWrapper.find('RegistrationPageButton');
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'ggggggggggggg'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: 'vvvvvvvvvv'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('should call sign in', () => {
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaaaaaaaaaaa'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: 'aaaaaaaaaaaa'}});
        enzymeWrapper.find('RegistrationPageButton').simulate('click', { preventDefault: () => {} });
        enzymeWrapper.update();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
