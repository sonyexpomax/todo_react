import configureStore from 'redux-mock-store';
import LogoutButtonContainer from '../../../src/components/LogoutButton';
import {mountWithStore} from '../../shallowWrapper';
import React from 'react';

const initialState = {};
const mockStore = configureStore();
let store, enzymeWrapper;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    enzymeWrapper = mountWithStore(<LogoutButtonContainer/>, store);
});

describe('Component LogoutButton', () => {
    it('should render logout button and find button', () => {
        expect(enzymeWrapper.find('div').hasClass('td-logout-btn-wrap')).toBe(true);
    });
    it('should call sign out', () => {
        const button = enzymeWrapper.find('div');
        button.simulate('click', { preventDefault: () => {} });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
