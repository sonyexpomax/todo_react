import configureStore from 'redux-mock-store';
import {mountWithStore} from '../../shallowWrapper';
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
    enzymeWrapper = mountWithStore(<RegistrationPageContainer {...props}/>, store);
});

describe('Component RegistrationPage', () => {
    it('should render RegistrationPage', () => {
        expect(enzymeWrapper.find('h2').text()).toBe('Registration');
        expect(enzymeWrapper.hasClass('td-registration-page-btn-wrap'));
    });
    it('should not call sign in with empty password and login', () => {
        const button = enzymeWrapper.find('#reg-btn');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should not call sign in with empty password', () => {
        const button = enzymeWrapper.find('#reg-btn');
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should not call sign in with empty confirm password', () => {
        const button = enzymeWrapper.find('#reg-btn');
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaaaaaaaaaaa'}});
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should not call sign in with wrong passwd and login', () => {
        const button = enzymeWrapper.find('#reg-btn');
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaew21sss'}});
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aa'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: '33e3'}});
        button.find('button').simulate('click', { preventDefault: () => {} });
        enzymeWrapper.update();
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('should call sign in', () => {
        const button = enzymeWrapper.find('#reg-btn');
        enzymeWrapper.find('#email').simulate('change', {target: {value: 'aaaaaa@ssss.sss'}});
        enzymeWrapper.find('#password').simulate('change', {target: {value: 'aaaaaaaaaaaa'}});
        enzymeWrapper.find('#confirm-password').simulate('change', {target: {value: 'aaaaaaaaaaaa'}});
        button.find('button').simulate('click', { preventDefault: () => {} });
        enzymeWrapper.update();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
